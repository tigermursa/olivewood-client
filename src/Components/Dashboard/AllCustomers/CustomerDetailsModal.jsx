import React from "react";
import Modal from "react-modal";
import { TfiClose } from "react-icons/tfi";
import "./AllCustomers.css"

const CustomerDetailsModal = ({ customer, isOpen, onClose }) => {
  if (!customer) {
    return null;
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Customer Details"
      className="customModalStyles"
    >
      <div className="text-center mt-4">
        <button
          onClick={onClose}
          className="bg-black hover:bg-white mt-2 p-1 rounded-full text-white hover:text-black text-xl"
        >
          <TfiClose />
        </button>
      </div>

      {/* Render customer details here */}
      <div className="customer-details flex flex-col items-center">
        <img className="rounded-3xl mb-2 w-32 h-32 object-cover" src={customer.image} alt="" />
        <h2 className="text-xl font-bold">{customer.name}</h2>
        <p>Email: {customer.email}</p>
        <p>Number: {customer.number}</p>
        <p>Age: {customer.age}</p>
        <p>Address: {customer.address}</p>
        {/* You can include any other customer details you want to display */}
      </div>
    </Modal>
  );
};

export default CustomerDetailsModal;
