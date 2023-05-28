import { useState, useEffect } from "react";
import axios from "axios";

import Movie from "./Movie";

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
      <h2 className="text-red-600 text-xl font-bold md:text-4xl py-8 px-4 text-center">
        {title}
      </h2>
      <div className="relative flex items-center group">
        <div
          id={"slider"}
          className="flex flex-wrap items-center mx-1 relative"
        >
          {movies.map((item, id) => (
            <Movie key={id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Row;
