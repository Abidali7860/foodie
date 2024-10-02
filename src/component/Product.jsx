import React from "react";

import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Product({ Data, cart, setCart }) {
  const addCart = (id, price, title, description, image) => {
    const obj = {
      id,
      price,
      title,
      description,
      image,
    };
    setCart([...cart, obj]);
    console.log("cart", cart);
    toast.success(`Item ${obj.title} Price-₹${obj.price} Added`, {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="relative top-[110px] left-5 ">
        <div className="grid gap-5 lg:grid-cols-3 md:grid-cols-2 justify- grid-cols">
          {Data.map((product, i) => {
            return (
              <div
                key={i}
                className=" rounded-lg  border-[1px] shadow-[rgba(0,0,0,0.24)7px_4px_8px] my-2  border-[#d8caca]"
                style={{ width: "18rem", height: "450px" }}
              >
                <Link to={`/product/${product.title}`}>
                  <img
                    src={product.image}
                    className="h-[200px] w-full rounded-md"
                    alt="..."
                  />{" "}
                </Link>
                <div className="p-3 space-y-1">
                  <h5 className="text-2xl font-[500]">{product.title}</h5>
                  <p className="text-sm ">{product.description}.</p>

                  <div className="relative top-8">
                    <button className=" font-[500] text-xl border-[1px] py-1 px-2 bg-orange-400 hover:opacity-75 duration-200">
                      ₹{product.price}
                    </button>
                    <button
                      onClick={() =>
                        addCart(
                          product.id,
                          product.price,
                          product.title,
                          product.description,
                          product.image
                        )
                      }
                      className="hover:opacity-75 duration-200  ml-4 font-[500] text-xl border-[1px] py-1 px-2 bg-orange-400"
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
