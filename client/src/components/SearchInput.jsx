import React from "react";
import SearchSVG from "../icon/search.svg";

const SearchInput = ({ onChange = () => {}, value }) => {
  return (
    <div className="flex items-center relative w-auto md:w-96 text-gray-400 mb-7">
      <span className="absolute text-lg top-1/2 transform -translate-y-1/2 left-3">
        <img src={SearchSVG} className="w-a12 h-6" />
      </span>
      <input
        type="text"
        onChange={onChange}
        value={value}
        placeholder="Search"
        className="w-full h-30 bg-white py-1 md:py-2 px-14 text-base font-normal placeholder:text-gray-400 border md:border-2 border-gray-400 rounded-lg outline-none focus-visible:border-primary focus-visible:text-gray-600"
      />
    </div>
  );
};

export default SearchInput;
