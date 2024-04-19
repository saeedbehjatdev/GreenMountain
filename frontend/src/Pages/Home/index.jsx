import React from "react";
import HeaderSlider from "./HeaderSlider";
import Categories from "./Categories";
import Slider from "./Slider";
import Discount from "./Discount";
import CommentBox from "./CommentBox";
export default function Home() {
  return (
    <>
      <HeaderSlider />
      <Categories />
      <Slider />
      <Discount />
      <CommentBox />
    </>
  );
}
