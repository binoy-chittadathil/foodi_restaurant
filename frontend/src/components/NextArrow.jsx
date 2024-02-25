import React from 'react';
import { IoIosArrowForward } from "react-icons/io";

function NextArrow(props) {
    const { onClick } = props;
  return (
    <div className="btn rounded-full flex items-center absolute -bottom-16 md:-top-16 bg-green text-white hover:text-black right-0 md:right-10" onClick={onClick}>
        <IoIosArrowForward />
      </div>
  )
}

export default NextArrow