import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

export default function Footer() {
  return (
    <div className="relative top-[130px] bottom-[0px]">
      <footer class="bg-black dark:bg-gray-900">
        <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div class="md:flex md:justify-between">
            <div class="mb-6 md:mb-0">
              <a href="https://flowbite.com/" class="flex items-center">
                <img
                  src="https://img.freepik.com/premium-photo/easy-view-banner-showcasing-pizza-momos-burger-fries-drinks_349936-1142.jpg"
                  class="rounded-[50%] h-8 me-3"
                  alt="FlowBite Logo"
                />
                <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">
                  FOODIE
                </span>
              </a>
            </div>
            <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 class="mb-6 text-sm font-semibold  uppercase text-white">
                  ABOUT
                </h2>
                <ul class="text-gray-500 dark:text-gray-400 font-medium">
                  <li class="mb-4">
                    <a class="hover:underline">Info.foodie.com</a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 class="mb-6 text-sm font-semibold uppercase text-white">
                  Follow us
                </h2>
                <ul class="text-gray-500 dark:text-gray-400 font-medium">
                  <li class="mb-4">
                    <a class="hover:underline ">Facebook</a>
                  </li>
                  <li>
                    <a class="hover:underline">Instagram</a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 class="mb-6 text-sm font-semibold  uppercase text-white">
                  Legal
                </h2>
                <ul class="text-gray-500 dark:text-gray-400 font-medium">
                  <li class="mb-4">
                    <a href="#" class="hover:underline">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" class="hover:underline">
                      Terms &amp; Conditions
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div class="sm:flex sm:items-center sm:justify-between">
            <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2023 <a class="hover:underline">FOODIE™</a>. All Rights
              Reserved.
            </span>
            <div class="flex mt-4 sm:justify-center sm:mt-0">
              <a href="#" class="text-gray-500 hover:text-white">
                <FaFacebook />
              </a>
              <a href="#" class="text-gray-500 hover:text-white ms-5">
                <FaSquareInstagram />
              </a>
              <a href="#" class="text-gray-500 hover:text-white ms-5">
                <FaTwitter />{" "}
              </a>
              <a href="#" class="text-gray-500 hover:text-white ms-5">
                <IoLogoWhatsapp />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
