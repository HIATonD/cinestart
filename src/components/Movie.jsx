import { useState } from "react";
import React from "react";

import { FaHeart, FaRegHeart } from "react-icons/fa";

const Movie = ({ item }) => {
  const [like, setLike] = useState(false);

  return (
    <div className="w-[260px] sm:w-[280px] md:w-[280px] lg:w-[270px] inline-block relative cursor-pointer p-2">
      <img
        className="w-full h-auto block text-white"
        src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
        alt={item.title}
      />
      <div className="absolute bottom-0 left-0 w-full h-full hover:bg-black/80 opacity-0 text-white hover:opacity-100">
        <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
          {item.title}
        </p>
        <p>
          {like ? (
            <FaHeart className="absolute bottom-4 right-4 text-gray-300" />
          ) : (
            <FaRegHeart className="absolute bottom-4 right-4 text-gray-300" />
          )}
        </p>
      </div>
    </div>
  );
};

export default Movie;
