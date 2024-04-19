import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import fetchApi from "../../../Utils/fetchApi";
import useFormFields from "../../../Utils/useFormFields";

export default function Register({ handlePage }) {
  const [fields, handleChange] = useFormFields();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:1337/api/auth/local/register", fields)
      .then((response) => {
        alert("login successfully");
        handleChangePageType();
      })
      .catch((err) => {
        alert(err.response.data.error.message);
      });
  };

  return (
    <>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="text-center text-mainGreen font-bold text-3xl mt-20">
            Register
          </h2>
        </div>
        {/* form */}
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            onSubmit={handleSubmit}
            className="space-y-6"
            action="#"
            method="POST"
          >
            {/* username */}
            <div>
              <label htmlFor="username" className="block text-sm font-medium">
                Username
              </label>
              <div className="mt-2">
                <input
                  onChange={handleChange}
                  id="username"
                  name="username"
                  type="text"
                  required
                  className="pl-2 block w-full border-2 border-mainGreen py-1.5 sm:text-sm outline-none "
                />
              </div>
            </div>
            {/* email */}
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="email" className="block text-sm font-medium">
                  Email
                </label>
              </div>
              <div className="mt-2">
                <input
                  onChange={handleChange}
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="pl-2 block w-full border-2 border-mainGreen py-1.5 sm:text-sm outline-none "
                />
              </div>
            </div>
            {/* password */}
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium">
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  onChange={handleChange}
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="pl-2 block w-full border-2 border-mainGreen py-1.5 sm:text-sm outline-none "
                />
              </div>
            </div>
            {/* submit button */}
            <div>
              <button
                type="submit"
                className="flex w-full justify-center bg-mainGreen px-3 py-3 text-sm font-semibold text-white focus:bg-yellowColor focus:text-black transition-colors"
              >
                Register
              </button>
            </div>
          </form>
          {/* login page */}
          <p className="mt-10 text-center text-sm text-gray-500">
            Are you have an account?
            <button
              onClick={handlePage}
              className="font-semibold leading-6 text-mainGreen"
            >
              Login
            </button>
          </p>
        </div>
      </div>
    </>
  );
}
