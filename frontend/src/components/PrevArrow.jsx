import React from 'react';
import { IoIosArrowBack } from "react-icons/io";

function PrevArrow(props) {
    const { onClick } = props;
  return (
      <div className="btn rounded-full flex items-center absolute z-10 -bottom-16  md:-top-16 bg-green text-white hover:text-black right-16 md:right-28" onClick={onClick}>
        <IoIosArrowBack />
      </div>
  )
}

export default PrevArrow