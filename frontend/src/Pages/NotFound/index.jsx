import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section class="flex items-center my-32 p-16">
      <div class="container flex flex-col items-center ">
        <div class="flex flex-col gap-6 max-w-md text-center">
          <h2 class="font-extrabold text-9xl text-mainGreen">
            <span class="sr-only">Error</span>404
          </h2>
          <p class="text-2xl md:text-3xl">Sorry, we couldn't find this page.</p>
          <Link
            to={"/"}
            class="px-8 py-4 text-xl font-semibold bg-mainGreen text-white hover:text-black hover:bg-yellowColor"
          >
            Back to home
          </Link>
        </div>
      </div>
    </section>
  );
}
