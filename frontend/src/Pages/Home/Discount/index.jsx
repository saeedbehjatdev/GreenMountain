import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import fetchApi from "../../../Utils/fetchApi";

export default function Discount() {
  const [discountProduct, setDiscountProduct] = useState();

  useEffect(() => {
    (async () => {
      let res = await fetchApi("products?populate=*&filters[discount][$gt]=0");
      setDiscountProduct(res.data);
    })();
  }, []);

  const slideItems = discountProduct?.map((e, index) => (
    // Card Image
    <div class="bg-mainGreen/30 shadow-md py-2 px-2 " key={index}>
      <img
        className="w-full h-[500px] xl:h-[380px] lg:h-[400px] md:h-[420px] "
        src={
          import.meta.env.VITE_BASE_URL +
          e?.attributes?.images?.data[0]?.attributes?.url
        }
        alt="discount-product-img"
      />
      {/* card body */}
      <h5 className="mt-3 text-2xl font-bold my-3">{e.attributes.name}</h5>
      {/* prices */}
      <div className="my-3">
        <div>
          <span className="font-semibold">Price :</span>{" "}
          <del className="text-gray-600">${e?.attributes?.price}</del>
        </div>
        <div>
          <span className="font-semibold text-gray-700">Off price : </span>{" "}
          <span className="text-mainGreen font-bold">
            ${e?.attributes?.price * (1 - e?.attributes?.discount / 100)}
          </span>
        </div>
      </div>
      {/* card footer */}
      <div className="flex justify-between items-center my-5">
        <div className="flex items-center">
          <box-icon name="star" color="#FCE700" type="solid"></box-icon>
          <span className="font-bold ml-1">4.5</span>
        </div>
        <Link
          to={`product-details/${e?.id}/${e?.attributes?.name
            .split(" ")
            .join("-")}`}
          className="bg-mainGreen text-white px-4 py-2 hover:bg-yellowColor hover:text-black font-bold transition-colors"
        >
          More info
        </Link>
      </div>
    </div>
  ));
  return (
    <>
      <div className="container">
        <div className="my-24">
          <h2 class="lg:text-3xl text-xl text-center mt-10 mb-4 text-mainGreen font-bold">
            Offers
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:gap-5 lg:grid-cols-3 xl:grid-cols-4 gap-3.5 mb-24">
          {slideItems}
        </div>
      </div>
    </>
  );
}
