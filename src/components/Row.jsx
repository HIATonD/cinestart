import { useState, useEffect } from "react";
import axios from "axios";

function Row({ title, fetchURL }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchURL]);
  // console.log(movies);
  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center">
        <div className="flex flex-wrap items-center">
          {movies.map((item) => (
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Row;
