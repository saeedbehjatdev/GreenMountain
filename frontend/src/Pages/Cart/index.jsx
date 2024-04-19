import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addItems, removeItems, removeAll } from "../../Store/Slices/CartSlice";

export default function Cart() {
  const { list } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  let totalPriceWithDiscount = 0;
  let totalSubPrice = 0;
  const items = list.map((e, index) => {
    totalPriceWithDiscount +=
      e.quantity * (e.attributes.price * (1 - e.attributes.discount / 100)) +
      45;
    totalSubPrice += e.quantity * e.attributes.price;
    console.log(e);
    return (
      <>
        <div key={index} className="hidden lg:grid grid-cols-2 py-6">
          <div className="flex items-center flex-col min-[550px]:flex-row gap-3 min-[550px]:gap-6 w-full max-xl:justify-center max-xl:max-w-xl max-xl:mx-auto">
            <div className="img-box">
              <img
                src={
                  import.meta.env.VITE_BASE_URL +
                  e?.attributes?.images?.data[0]?.attributes?.url
                }
                alt="cart-img"
                className="w-[300px] h-[250px]"
              />
            </div>
            <div className="pro-data w-full ">
              <h5 className="font-bold text-3xl text-black max-[550px]:text-center">
                {e?.attributes?.name}
              </h5>
              <p className="font-normal text-sm text-gray-700 my-2 ">
                <span>
                  {e?.attributes?.categories?.data[0]?.attributes?.name}
                </span>
              </p>
              <h6 className="font-bold text-lg text-mainGreen max-[550px]:text-center">
                ${e.attributes.price * (1 - e.attributes.discount / 100)}
              </h6>
            </div>
          </div>
          <p className="flex items-center justify-between font-bold text-xl text-black ">
            <span className="w-full text-center">$15</span>
            <span className="w-full text-center">%{e.attributes.discount}</span>
            <span className="w-full text-center">
              <div className="flex justify-between items-center bg-mainGreen mx-auto w-28 h-16 p-3">
                <button
                  onClick={() => dispatch(removeItems(e.id))}
                  className="cursor-pointer text-yellowColor font-bold text-3xl"
                >
                  -
                </button>
                {e.quantity && (
                  <span className="cursor-pointer text-yellowColor font-bold text-2xl">
                    {e.quantity}
                  </span>
                )}
                <button
                  onClick={() => dispatch(addItems(e))}
                  className="cursor-pointer text-yellowColor font-bold text-3xl"
                >
                  +
                </button>
              </div>
            </span>
            <span className="w-full text-mainGreen text-center font-bold">
              $
              {e.quantity *
                (e.attributes.price * (1 - e.attributes.discount / 100))}
            </span>
          </p>
        </div>

        {/* size : md and sm */}
        <div className="grid grid-cols-1 lg:grid-cols-2 min-[550px]:gap-6 border-t border-gray-200 py-6  lg:hidden">
          <div className="flex items-center flex-col min-[550px]:flex-row gap-3 min-[550px]:gap-6 w-full max-xl:justify-center max-xl:max-w-xl max-xl:mx-auto">
            <div className="img-box">
              <img
                src={
                  import.meta.env.VITE_BASE_URL +
                  e?.attributes?.images?.data[0]?.attributes?.url
                }
                alt="perfume bottle image"
                className="w-[500px] h-[350px]  "
              />
            </div>
            <div className="pro-data w-full ">
              <h5 className="font-bold text-3xl text-black">
                {e?.attributes?.name}
              </h5>
              <p className="font-semibold text-sm text-gray-700 my-2 ">
                {e?.attributes?.categories?.data[0]?.attributes?.name}
              </p>
              <h6 className="font-semibold text-lg text-black">
                <span className="text-black">Price of each : </span>$
                {e.attributes.price * (1 - e.attributes.discount / 100)}
              </h6>
              <h6 className="text-mainGreen font-bold text-xl w-full my-16">
                <span className="text-black font-bold">Total : </span>$
                {e.quantity *
                  (e.attributes.price * (1 - e.attributes.discount / 100))}
              </h6>
            </div>
          </div>
          <div className="flex flex-col items-center w-full">
            <span className="w-full text-center">
              <div className="flex justify-between items-center bg-mainGreen mx-auto w-28 h-16 p-3">
                <button
                  onClick={() => dispatch(removeItems(e.id))}
                  className="cursor-pointer text-yellowColor font-bold text-3xl"
                >
                  -
                </button>
                {e.quantity && (
                  <span className="cursor-pointer text-yellowColor font-bold text-2xl">
                    {e.quantity}
                  </span>
                )}
                <button
                  onClick={() => dispatch(addItems(e))}
                  className="cursor-pointer text-yellowColor font-bold text-3xl"
                >
                  +
                </button>
              </div>
            </span>
          </div>
        </div>
      </>
    );
  });

  // checked
  return (
    <>
      <div className="mt-[95px] lg:mt-[140px]">
        {list.length == 0 ? (
          <div className="h-[80vh] mt-[40vh] mx-auto text-3xl lg:text-3xl  ">
            <div className="text-center">Cart Empty</div>
            <Link
              to={"/products/all-categories"}
              className="flex items-center justify-center w-54 lg:w-80 mt-4 h-12 bg-mainGreen hover:bg-yellowColor hover:text-black transition-colors text-white mx-auto"
            >
              Products Page
            </Link>
          </div>
        ) : (
          <div div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
            <h2 className="font-bold text-4xl mt-40 mb-10 text-center text-mainGreen">
              Your Cart
            </h2>
            <div className="bg-mainGreen/10 hidden lg:grid grid-cols-2 p-6 my-10">
              <h3 className="font-semibold text-xl">Product</h3>
              <p className="flex items-center justify-between font-semibold text-xl text-black ">
                <span className="w-full text-center">Charge</span>
                <span className="w-full text-center">Discount</span>
                <span className="w-full text-center">Quantity</span>
                <span className="w-full text-center">Total</span>
              </p>
            </div>
            {items}
            <div className="bg-mainGreen/10 p-10 w-full my-10">
              <div className="flex items-center justify-between w-full mb-6">
                <p className="font-semibold text-xl text-black">Sub Total</p>
                <h6 className="font-semibold text-xl text-black">
                  ${totalSubPrice}
                </h6>
              </div>
              <div className="flex items-center justify-between w-full pb-6 border-b-2 border-black">
                <p className="font-semibold text-xl text-black">
                  Delivery Charge
                </p>
                <h6 className="font-semibold text-xl text-black">$45.00</h6>
              </div>
              <div className="flex items-center justify-between w-full py-6">
                <p className="font-manrope font-medium text-2xl text-black">
                  Total
                </p>
                <h6 className="font-bold text-mainGreen text-2xl ">
                  ${totalPriceWithDiscount}
                </h6>
              </div>
            </div>
            <div className="flex items-center flex-col sm:flex-row justify-center gap-20 my-10">
              <button
                onClick={() => dispatch(removeAll())}
                className="w-[250px] py-4 text-center justify-center items-center hover:bg-mainGreen font-bold text-lg hover:text-white flex transition-all bg-yellowColor text-black"
              >
                Clear Cart
              </button>
              <button className="w-[250px] py-4 text-center justify-center items-center bg-mainGreen font-bold text-lg text-white flex transition-all hover:bg-yellowColor hover:text-black">
                Payment
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
