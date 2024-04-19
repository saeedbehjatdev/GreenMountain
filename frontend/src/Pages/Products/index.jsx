import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import fetchApi from "../../Utils/fetchApi";

// Products card
export function ProductCard({ img, name, price, desc, id }) {
  return (
    <div class="bg-mainGreen/30 shadow-md py-2 px-2">
      <img
        className="w-full h-[500px] xl:h-[380px] lg:h-[400px] md:h-[420px]"
        src={img}
        alt="products-img"
      />
      <h5 className="text-left mt-3 font-bold text-2xl">{name}</h5>
      <div className="mt-3 font-bold">
        Price : <span className="text-mainGreen font-bold ">${price}</span>
      </div>
      {/* Card description */}
      <div className="text-justify my-5">
        {desc.split(" ").slice(0, 20).join(" ")}...
      </div>
      {/* Footer card */}
      <div className="flex justify-between items-center my-5">
        <div className="flex items-center">
          <box-icon name="star" color="#FCE700" type="solid"></box-icon>
          <span className="font-bold ml-1">4.5</span>
        </div>
        <Link
          to={`/product-details/${id}/${name.split(" ").join("-")}`}
          className="bg-mainGreen text-white px-4 py-2 hover:bg-yellowColor hover:text-black font-bold transition-colors"
        >
          More information
        </Link>
      </div>
    </div>
  );
}
export default function Product() {
  const [rangeValue, setRangeValue] = useState(1000);
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);
  const [sort, setSort] = useState("createdAt:asc");
  const handleChangeSort = (event) => {
    setSort(event.target.value);
  };
  useEffect(() => {
    (async () => {
      const res = await fetchApi(
        `products?populate=*${
          categoryName !== "all-categories"
            ? `&filters[categories][name][$eqi]=${categoryName}`
            : ""
        }&filters[price][$lte]=${rangeValue}&sort=${sort}`
      );
      console.log(res);
      setProducts(res.data);
    })();
  }, [rangeValue, categoryName, sort]);

  const items = products?.map((e, index) => {
    return (
      <ProductCard
        key={index}
        id={e.id}
        name={e?.attributes?.name}
        price={e?.attributes?.price}
        desc={e?.attributes?.description}
        img={
          import.meta.env.VITE_BASE_URL +
          e?.attributes.images?.data[0]?.attributes?.url
        }
      />
    );
  });
  console.log(products);
  return (
    <>
      <h2 className="mt-36 text-center text-3xl text-mainGreen font-bold">
        Products
      </h2>
      {/* filter section */}
      <div className="container my-20 ">
        <div className="flex flex-col lg:flex-row justify-between items-center ">
          {/* sort by price */}
          <div className=" flex w-full lg:w-[45%] items-center bg-mainGreen px-4 py-2 text-white font-bold">
            <label htmlFor="medium-range">Price</label>
            <p className="mx-3"> : $0 - ${rangeValue}</p>
            <input
              id="medium-range"
              min={0}
              step={10}
              max={1000}
              type="range"
              value={rangeValue}
              onChange={(e) => setRangeValue(e.target.value)}
              className="bg-yellowColor w-[55%] md:w-[78%] lg:w-[64%] mx-auto h-2 rounded-lg appearance-none cursor-pointer"
            />
          </div>
          {/* Sort by date and price */}
          <div className="flex my-5 w-full lg:w-[45%] items-center bg-mainGreen px-2 py-2 text-white font-bold">
            <label htmlFor="sortSection" className="mx-3">
              Sort by :
            </label>
            <select
              id="sortSection"
              onChange={handleChangeSort}
              className=" block w-[75%] md:w-[87%] lg:w-[79%] rounded-none bg-green-700/80 px-2 transition-all outline-none font-semibold "
              value={sort}
            >
              <option value={"createdAt:desc"}>New product</option>
              <option value={"createdAt:asc"}>Old product</option>
              <option value={"discount:desc"}>Offers product</option>
              <option value={"price:desc"}>Highest price</option>
              <option value={"price:asc"}>Lowest price</option>
            </select>
          </div>
        </div>
        {/* products card */}
        <div className="w-full my-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-4 ">
            {items}
          </div>
        </div>
      </div>
    </>
  );
}
