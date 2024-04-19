import React from "react";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <>
      {/* contact header */}
      <div className="w-full h-48 mt-44 bg-mainGreen text-white text-center p-14">
        <h2 className="text-5xl font-bold">CONTACT US</h2>
        <Link to={"/"}>Home</Link>
        <span className="text-yellowColor"> &#8658; </span>
        <Link to={"/contact"}>Contact</Link>
      </div>
      {/* contact Details */}
      <div className="my-28">
        <h2 className="text-3xl text-mainGreen font-medium text-center ">
          Our Outlet Address! Please Visit Us.
        </h2>
        <div className="container px-20 mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-14   ">
          <div>
            <h5 className="font-bold">&#9679; BD Shop</h5>
            <p className="text-sm mt-4 text-gray-500 font-medium">
              365 Old BD Road, Uttra Shop Bd
            </p>
            <p className="font-medium text-sm ">Call us: +01-234567</p>
            <p className="text-sm mt-4 text-gray-500 font-medium">
              Assistance hours: Monday - Friday
            </p>
            <p className="font-medium text-sm">9am to 8pm</p>
          </div>
          <div>
            <h5 className="font-bold">&#9679; USA Shop</h5>
            <p className="text-sm mt-4 text-gray-500 font-medium">
              97, Old Avenue, Rd No 17, USA 1213
            </p>
            <p className="font-medium text-sm ">Call us: +01-234567</p>
            <p className="text-sm mt-4 text-gray-500 font-medium">
              Assistance hours: Monday - Friday
            </p>
            <p className="font-medium text-sm">9am to 8pm</p>
          </div>
          <div>
            <h5 className="font-bold">&#9679; UK Shop</h5>
            <p className="text-sm mt-4 text-gray-500 font-medium">
              House-33, Road-22, Block-Z, UK 129
            </p>
            <p className="font-medium text-sm ">Call us: +01-234567</p>
            <p className="text-sm mt-4 text-gray-500 font-medium">
              Assistance hours: Monday - Friday
            </p>
            <p className="font-medium text-sm">9am to 8pm</p>
          </div>
          <div>
            <h5 className="font-bold">&#9679; CA Shop</h5>
            <p className="text-sm mt-4 text-gray-500 font-medium">
              Torento-33, Road-43, Block-Z, CA 119
            </p>
            <p className="font-medium text-sm ">Call us: +01-234567</p>
            <p className="text-sm mt-4 text-gray-500 font-medium">
              Assistance hours: Monday - Friday
            </p>
            <p className="font-medium text-sm">9am to 8pm</p>
          </div>
        </div>
      </div>
      {/* map */}
      <div class="container relative w-full h-96 my-28">
        <iframe
          class="absolute top-0 left-0 w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12080.73732861526!2d-74.0059418!3d40.7127847!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM40zMDA2JzEwLjAiTiA3NMKwMjUnMzcuNyJX!5e0!3m2!1sen!2sus!4v1648482801994!5m2!1sen!2sus"
        ></iframe>
      </div>
      {/* contact form */}
      <div class="my-20 mx-auto max-w-xl bg-white">
        <h2 class="text-3xl text-mainGreen font-semibold text-center">
          Ask Us Anything Here
        </h2>
        <h6 className="text-center mt-3 text-base text-gray-700">
          lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugait arcu
          nisl, viverra dolor diam ac.{" "}
        </h6>
        <form class="mt-8 px-10 md:px-0 space-y-4">
          <input
            type="text"
            placeholder="Name"
            class="w-full py-3 px-4 bg-gray-100 text-sm"
          />
          <input
            type="email"
            placeholder="Email"
            class="w-full py-3 px-4 bg-gray-100 text-sm "
          />
          <input
            type="text"
            placeholder="Subject"
            class="w-full py-3 px-4 bg-gray-100 text-sm "
          />
          <textarea
            placeholder="Message"
            rows="6"
            class="w-full px-4 bg-gray-100 text-sm pt-3 "
          ></textarea>
          <button
            type="button"
            class="text-white bg-mainGreen hover:bg-yellowColor hover:text-black font-bold px-4 py-3 w-full"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
