import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { AiOutlineDelete } from "react-icons/ai";
import { remove } from "../Redux/CartSlice";

const Cart = () => {
  const cartProducts = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const removeToCart = (id) => {
    dispatch(remove(id));
  };
  console.log(cartProducts);
  return (
    <div className="overflow-x-auto p-4 pb-56 mx-auto" style={{ width: "1280px" }}>
      <table className="table">
        {/* head */}
        {cartProducts.length > 0 ? (
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th className="">Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th></th>
            </tr>
          </thead>
        ) : (
          <tbody>
            <tr>
              <td colSpan="7">No items in the cart.</td>
            </tr>
          </tbody>
        )}

        <tbody>
          {cartProducts.map((product) => (
            <tr key={product.id}>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={product.product.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </div>
              </td>
              <td>{product.product.title}</td>
              <td className="">{product.product.price}</td>
              <td className="">{product.quantity}</td>
              <td>{product.quantity * product.product.price}</td>
              <td>
                <button
                  className="btn btn-sm btn-outline"
                  onClick={() => removeToCart(product.id)}
                >
                  <AiOutlineDelete />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Cart;
