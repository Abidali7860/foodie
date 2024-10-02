import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Cart({ cart, setCart }) {
  return (
    <>
      <div className="relative top-[90px] p-3">
        {cart.length == 0 ? (
          <div className="text-center">
            {" "}
            <h1 className="text-4xl font-semibold ">Card is Empty.....</h1>
            <Link
              to={"/"}
              className="p-2 relative top-5 text-white rounded-md font-[600] bg-[#f4a91e]"
            >
              Continue Shopping
            </Link>{" "}
          </div>
        ) : (
          cart.map((product) => {
            return (
              <div className=" border-[4px]">
                <div>
                  <div className="flex w-full p-10">
                    <div className="grid gap-2 space-y-2 sm:grid-cols-2 ">
                      <div className="pr-[20px]">
                        <img
                          src={product.image}
                          className="h-[250px] min-w-[300px] md:w-[500px]"
                          alt="..."
                        />
                      </div>
                      <div className="">
                        <div className="">
                          <h5 className="text-2xl font-[500]">
                            {product.title}
                          </h5>
                          <p className="card-text"> {product.description}</p>
                          <div className="mt-6">
                            <a
                              href="#"
                              className="font-300 md:font-[500] text-sm md:text-xl border-[1px] py-1 px-4 md:py-3 md:px-8 bg-orange-400 hover:opacity-75 duration-200"
                            >
                              ₹{product.price}
                            </a>
                            <a
                              href="#"
                              className="font-300 md:font-[500] text-sm md:text-xl ml-4  border-[1px] py-1 px-4 md:py-3 md:px-8 bg-orange-400 hover:opacity-75 duration-200"
                            >
                              Buy Now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
      {cart.length != 0 && (
        <div className="relative p-5 text-center">
          <button
            className=" p-2 bg-[red] absolute  left-[40%] top-[100px]  rounded-md text-white text-2xl font-bold"
            onClick={() => setCart("")}
          >
            CLEAR CART
          </button>
        </div>
      )}
    </>
  );
}
