import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { addItems, removeItems } from "../../Store/Slices/CartSlice";
import fetchApi from "../../Utils/fetchApi";

export default function ProductDetails() {
  const [product, setProduct] = useState();
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const res = await fetchApi(`products/${id}?populate=*`);
      setProduct(res.data);
    })();
  }, [id]);
  const quantity = useSelector((state) => state.cart?.list)?.filter(
    (e) => e.id == id
  )[0]?.quantity;
  return (
    <>
      <h2 className="text-center font-bold text-3xl text-mainGreen mt-36">
        Product Details
      </h2>
      <div className="container my-8 flex flex-col lg:flex-row ">
        {/* product Image */}
        <div className="w-full">
          <img
            src={
              import.meta.env.VITE_BASE_URL +
              product?.attributes?.images?.data[0]?.attributes?.url
            }
            alt="product-detail-img"
            className="w-full md:w-[350px] md:mx-auto lg:w-[305px] xl:w-[300px]"
          />
        </div>
        {/* product details */}
        <div className="">
          <h2 className="text-3xl font-bold mb-4 mt-4 text-mainGreen ">
            {product?.attributes?.name}
          </h2>
          {/* categorize item  */}
          <div className="text-xs text-gray-500 mb-4 ">
            {product?.attributes?.categories?.data[0]?.attributes?.name}{" "}
            category
          </div>
          {/* product description */}
          <h5 className="font-bold text-lg mb-4">Description :</h5>
          <p className="text-base text-justify px-3 mb-4">
            {product?.attributes?.description}
          </p>
          <div className="flex justify-around  items-center mb-4">
            {/* product price */}
            <div className="">
              {product?.attributes?.discount > 0 ? (
                <s className="text-3xl text-mainGreen font-bold">
                  ${product?.attributes?.price}
                </s>
              ) : (
                <div className="text-3xl text-mainGreen font-bold">
                  ${product?.attributes?.price}
                </div>
              )}
            </div>
            {/* product star */}
            <div className="flex items-center">
              <box-icon name="star" color="#FCE700" type="solid"></box-icon>
              <span className="text-3xl font-bold ml-1">4.5</span>
            </div>
          </div>
          {/* product quantity */}
          <div className="flex justify-between items-center bg-mainGreen mx-auto w-28 h-16 p-3">
            <button
              onClick={() => dispatch(removeItems(id))}
              className="cursor-pointer text-yellowColor font-bold text-3xl"
            >
              -
            </button>
            {/* quantity  */}
            {quantity && (
              <span className="cursor-pointer text-yellowColor font-bold text-3xl">
                {quantity}
              </span>
            )}
            <button
              onClick={() => dispatch(addItems(product))}
              className="cursor-pointer text-yellowColor font-bold text-3xl"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
