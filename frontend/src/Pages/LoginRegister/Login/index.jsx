import React from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import login from "../../../Store/Slices/Auth";
import useFormFields from "../../../Utils/useFormFields";

export default function Login({ handlePage }) {
  const [fields, handleChange] = useFormFields();
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:1337/api/auth/local", fields)
      .then((response) => {
        console.log(response);
        dispatch(
          login({
            user: response.data.user,
            token: response.data.jwt,
          })
        );
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="text-center text-mainGreen font-bold text-3xl mt-20">
            Login
          </h2>
        </div>
        {/* form login */}
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            onSubmit={handleSubmit}
            className="space-y-6"
            action="#"
            method="POST"
          >
            {/* Username */}
            <div>
              <label
                htmlFor="Username or Email"
                className="block text-sm font-medium text-gray-900"
              >
                Username
              </label>
              <div className="mt-2">
                <input
                  onChange={handleChange}
                  id="identifier"
                  name="identifier"
                  type="text"
                  className="pl-2 block w-full border-2 border-mainGreen py-1.5 sm:text-sm outline-none "
                />
              </div>
            </div>
            {/* Password */}
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  onChange={handleChange}
                  id="password"
                  name="password"
                  type="password"
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
                Login
              </button>
            </div>
          </form>
          {/* register page */}
          <p className="mt-10 text-center text-sm text-gray-500">
            Don't have an account?
            <button
              onClick={handlePage}
              className="font-semibold leading-6 text-mainGreen"
            >
              Register
            </button>
          </p>
        </div>
      </div>
    </>
  );
}
