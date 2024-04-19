import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "tailwindcss/tailwind.css";
import "boxicons";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../Store/Slices/Auth";
import fetchApi from "../../Utils/fetchApi";

export const CardInpResult = ({ img, name, id }) => {
  return (
    <Link
      className="h-full w-full"
      to={`/product-details/${id}/${name.split(" ").join("-")}`}
    >
      <div className="flex border-b py-2 items-center border-zinc-700">
        <img src={img} alt={name} className="w-14 h-14" />
        <h3>{name}</h3>
      </div>
    </Link>
  );
};

window.addEventListener("click", (e) => {
  if (!e.target.closest(".searchResult")) {
    setSearchInp("");
  }
});

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const dispatch = useDispatch();
  const productQuantity = useSelector((state) => state.cart.list).length;
  const { token } = useSelector((state) => state.auth);
  const [searchInp, setSearchInp] = useState("");
  const [inpResult, setInpResult] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const navOpenBtn = document.querySelector(".nav-icon-open");
    const navCLoseBtn = document.querySelector(".nav-icon-close");
    const nav = document.querySelector(".nav");
    const overLay = document.querySelector(".bg-blend-overlay");
    const searchInpBg = document.querySelector(".searchInpBg");
    searchInp && searchInpBg.classList.toggle("h-60");
    !searchInp && searchInpBg.classList.toggle("h-0");
    searchInp && searchInpBg.classList.add("overflow-y-auto");
    navOpenBtn.addEventListener("click", () => {
      nav.classList.remove("-left-64");
      nav.classList.add("left-0");
      overLay.classList.add("overlay--visible");
    });
    navCLoseBtn.addEventListener("click", () => {
      nav.classList.add("-left-64");
      nav.classList.remove("left-0");
      overLay.classList.remove("overlay--visible");
    });
    overLay.addEventListener("click", () => {
      nav.classList.add("-left-64");
      nav.classList.remove("left-0");
      overLay.classList.remove("overlay--visible");
    });
  });

  // Saerch input in navbar
  useEffect(() => {
    if (searchInp) {
      (async () => {
        const res = await fetchApi(
          `products?populate=*&filters[name][$containsi]=${searchInp}`
        );
        setInpResult(res?.data);
      })();
    }
  }, [searchInp]);
  window.addEventListener("click", (e) => {
    if (!e.target.closest(".searchInpBg")) {
      setSearchInp("");
    }
  });
  const searchItems = inpResult?.map((e, index) => (
    <CardInpResult
      key={index}
      img={
        import.meta.env.VITE_BASE_URL +
        e?.attributes.images?.data[0]?.attributes?.url
      }
      id={e.id}
      name={e?.attributes?.name}
    />
  ));
  return (
    <>
      {/* Navbar */}
      <header className="top-0 md:flex fixed z-10 right-0 left-0 w-[98%] md:w-full mx-auto h-24 bg-mainGreen md:text-xs  lg:text-lg xl:text-lg items-center justify-between pr-10 px-7 py-5 text-xl backdrop-blur-[6px] ">
        {/* Navbar items HOME  */}
        <nav className="flex gap-x-3 lg:gap-x-5 items-center text-white">
          <Link to={"/"} className="font-bold">
            GreenMountain
          </Link>
          <ul className="flex gap-x-4 lg:gap-x-5 xl:text-lg lg:text-sm md:text-xs text-base ">
            <li>
              <Link
                className="hover:text-yellowColor transition-colors"
                to={"/"}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-yellowColor transition-colors"
                to={"/products/all-categories"}
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-yellowColor transition-colors"
                to={"/about "}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-yellowColor transition-colors"
                to={"/contact"}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
        {/* Search Input */}
        <div className="relative md:block hidden">
          <input
            value={searchInp}
            onChange={(e) => {
              setSearchInp(e.target.value);
              setLoading(true);
            }}
            type="text"
            className="pl-6 h-10 xl:w-96 lg:w-80 md:w-40 rounded-full text-sm outline-none"
            placeholder="Search ..."
          />
          <div className="searchInpBg flex-col items-center absolute transition-all top-full flex w-[90%] left-[20px] rounded-b-lg bg-white">
            {searchItems}
          </div>
        </div>
        {/* Login Register */}
        <div className="md:flex lg:block gap-x-2.5 lg:gap-x-5 items-center text-white text-lg hidden ">
          {token ? (
            <span onClick={() => dispatch(logout())}>logout</span>
          ) : (
            <>
              <Link to={"/login-register"}>
                {token ? (
                  <span onClick={() => dispatch(logout())}>Login/Register</span>
                ) : (
                  <>
                    <span className="font-semibold md:text-xs lg:text-lg text-sm xl:inline-block bg-green-700/50 px-4 py-2 rounded-full hover:bg-yellowColor transition-colors hover:text-black">
                      <Link to={"/login-register"}>Login | Sign in</Link>
                    </span>
                  </>
                )}
              </Link>
            </>
          )}

          {/* Cart */}
          <span className="w-[2px] h-8 bg-white/50"></span>
          <Link to={"/cart"} className="relative">
            <box-icon type="solid" name="cart" color="#FCE700"></box-icon>
            {productQuantity > 0 && (
              <div className="w-4 h-4 rounded-full bg-white absolute top-4 right-0 left-3 text-[0.9rem] justify-center text-black font-bold items-center flex">
                {productQuantity}
              </div>
            )}
          </Link>
        </div>
      </header>

      {/* Mobile Navbar */}

      {/* burger menu */}
      <div className="bg-mainGreen md:hidden flex flex-col fixed px-4 h-32 z-20 w-full items-center top-0 justify-between">
        {/* items */}
        <div className="w-full flex justify-between items-center my-5 ">
          <Link onClick={() => setNavOpen(!navOpen)} className="nav-icon-open">
            <box-icon
              name="menu-alt-left"
              color="#FCE700"
              className="text-2xl"
            ></box-icon>
          </Link>
          {/* logo */}
          <h2 className="font-bold text-lg text-white">GreenMountain</h2>
          {/* cart */}
          <Link to={"/cart"}>
            <box-icon type="solid" name="cart" color="#FCE700"></box-icon>
          </Link>
          {/* inside burger menu */}
          <div className="nav fixed top-0 bottom-0 -left-64 w-64 min-h-screen bg-mainGreen z-20 md:hidden px-4 transition-all">
            {/* close button */}
            <div className="border-b-2 border-b-gray-100 flex justify-between pt-3 pb-4 mb-6 ">
              <h2 className="font-bold text-lg text-white">GreenMountain</h2>
              <Link
                onClick={() => setNavOpen(false)}
                className="nav-icon-close"
              >
                <box-icon name="x" color="#FCE700"></box-icon>
              </Link>
            </div>
            {/* links */}
            <div className="space-y-3">
              <Link to={"/"} className="block text-white font-bold">
                Home
              </Link>
              <Link
                to={"/products/all-categories"}
                className="block text-white font-bold"
              >
                Products
              </Link>
              <Link to={" "} className="block text-white font-bold">
                About us
              </Link>
              <Link
                to={"/products/all-categories"}
                className="block text-white font-bold"
              >
                Contact us
              </Link>
              <Link
                to={"/cart"}
                className="flex items-center text-white font-bold"
              >
                <box-icon type="solid" name="cart" color="#FCE700"></box-icon>
                <span className="mx-1"> Cart</span>
              </Link>
            </div>
            {/* logout */}
            <div className="border-t-2 border-t-gray-100 pt-3 pb-4 mt-6 text-base space-y-3">
              {token ? (
                <span onClick={() => dispatch(logout())}>logout</span>
              ) : (
                <>
                  <Link to={"/login-register"} className="items-center">
                    <span className="font-semibold mt-5 text-sm xl:inline-block px-4 py-2 rounded-full bg-yellowColor transition-colors text-black">
                      Login | Sign in
                    </span>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
        {/* searchbar */}
        <div className="h-32">
          <div className="relative">
            <input
              value={searchInp}
              onChange={(e) => {
                setSearchInp(e.target.value);
                setLoading(true);
              }}
              type="text"
              className="pl-6 h-10 w-96 md:w-52 rounded-full text-sm outline-none"
              placeholder="Search ..."
            />
            <div className="searchInpBg flex-col items-center absolute transition-all top-full flex w-[90%] left-[20px] rounded-b-lg bg-white">
              {searchItems}
            </div>
          </div>
        </div>
      </div>
      {/* Hamburger Menu overlay*/}
      <div
        className={`bg-blend-overlay bg-black/50 md:hidden w-full h-full z-10 fixed inset-0 transition-all ${
          navOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
        onClick={() => setNavOpen(false)}
      ></div>
    </>
  );
}
