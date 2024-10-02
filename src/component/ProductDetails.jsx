import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Data } from "./Data";
import Product from "./Product";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ProductDetails({ cart, setCart }) {
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

  const { title } = useParams();
  const [product, setProduct] = useState({});
  const [relatedProduct, setRelatedProduct] = useState([]);
  useEffect(() => {
    const filterProduct = Data.filter((product) => product.title == title);

    setProduct(filterProduct[0]);
    const relatedProducts = Data.filter(
      (item) => item.category === product.category
    );
    //console.log(relatedProduct)
    setRelatedProduct(relatedProducts);
  }, [title, product.category]);

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

      <div className="pt-[80px]">
        <div>
          <div className="flex w-full p-10">
            <div className="grid gap-2 sm:grid-cols-2">
              <div className="pr-[20px]">
                <img
                  src={product.image}
                  className="h-[250px] min-w-[300px] md:w-[500px]"
                  alt="..."
                />
              </div>
              <div className="">
                <div className="">
                  <h5 className="text-2xl font-[500]">{product.title}</h5>
                  <p className="card-text"> {product.description}</p>
                  <div className="relative top-14">
                    <a
                      href="#"
                      className="font-300 md:font-[500] text-xl font-[600] md:text-xl border-[1px] py-2  px-3 bg-orange-400 hover:opacity-75 duration-200"
                    >
                      ₹{product.price}
                    </a>
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
                      className="hover:opacity-75 duration-200 ml-4 font-[500] text-xl border-[1px] py-2 px-3 bg-orange-400"
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col w-full p-10 text-center ">
          <div className="  h-[4px] min-w-[200px] bg-[black]"></div>
          <h1 className=" pt-4 text-3xl md:text-6xl font-bold text-center md:font-[900]">
            {" "}
            RELATIVE{" "}
            <span className=" pt-4 text-3xl md:text-6xl font-bold text-center md:font-[900] text-orange-500">
              FOOD
            </span>
          </h1>
        </div>
      </div>
      <Product cart={cart} setCart={setCart} Data={relatedProduct} />
    </>
  );
}
