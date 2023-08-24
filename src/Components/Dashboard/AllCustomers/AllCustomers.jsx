import React, { useState, useEffect } from "react";
import axios from "axios";
import LazyLoad from "react-lazyload";
import { FaCrown } from "react-icons/fa";
import CustomerDetailsModal from "./CustomerDetailsModal";

const AllCustomers = () => {
  const [customers, setCustomers] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("/userData.json")
      .then((response) => {
        setCustomers(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });
  }, []);

  const openModal = (customer) => {
    setSelectedCustomer(customer);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedCustomer(null);
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col lg:flex-row bg-gradient-to-br from-blue-900 to-gray-700 employee-bg text-white">
      <div className="w-full lg:border pe-8 -ps-8 w-of-salary">
        {isLoading ? (
          <div className="flex justify-center items-center w-full h-full">
            <span className="loading loading-bars loading-lg "></span>
          </div>
        ) : (
          <table className="table">
            <thead>
              <tr className="text-white">
                <th className="display-none-in-phone">Index</th>
                <th>Image</th>
                <th>Name</th>
                <th className="display-none-in-phone">Age</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer) => (
                <tr
                  key={customer.id}
                  onClick={() => openModal(customer)}
                  className="cursor-pointer"
                >
                  <td className="display-none-in-phone">{customer.id}</td>
                  <td>
                    <LazyLoad height={50} offset={100}>
                      <img
                        className="rounded-full object-cover"
                        src={customer.image}
                        alt={customer.name}
                        style={{ width: "50px", height: "50px" }} // Set fixed width and height
                      />
                    </LazyLoad>
                  </td>
                  <td>{customer.name}</td>
                  <td className="display-none-in-phone">{customer.age}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      <CustomerDetailsModal
        customer={selectedCustomer}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </div>
  );
};

export default AllCustomers;
