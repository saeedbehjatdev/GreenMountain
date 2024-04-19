import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import fetchApi from "../../../Utils/fetchApi";

export const CategoryCard = ({ img, name }) => {
  return (
    <>
      <Link to={`/products/${name}`}>
        <img src={img} className="w-60 h-72 shadow-sm" />
        <h4 className="mt-3 text-lg font-bold bg-mainGreen text-white px-4 py-2 hover:bg-yellowColor hover:text-black transition-colors">
          {name}
        </h4>
      </Link>
    </>
  );
};

export default function Categories() {
  const [categories, setCategories] = useState();
  useEffect(() => {
    (async () => {
      const res = await fetchApi("categories?populate=*");
      setCategories(res.data);
    })();
  }, []);
  const items = categories?.map((e, index) => (
    <CategoryCard
      key={index}
      name={e.attributes.name}
      img={
        import.meta.env.VITE_BASE_URL +
        e?.attributes?.images?.data[0]?.attributes?.url
      }
    />
  ));
  return (
    <>
      <div className="container my-24 text-center select-none">
        <div className="my-24">
          <h2 class="lg:text-3xl text-xl text-center mt-10 mb-4 text-mainGreen font-bold">
            Categories
          </h2>
        </div>
        <div className="flex flex-wrap justify-center gap-5 lg:gap-x-24">
          {items}
        </div>
        <div className="my-24">
          <h2 class="lg:text-3xl text-xl text-center mt-10 mb-4 text-mainGreen font-bold">
            New Products
          </h2>
        </div>
      </div>
    </>
  );
}
