import axios from "axios";
import { useState, useEffect } from "react";

function Exercise19_1() {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("https://swapi.dev/api/films/1/");
        setMovie(data);
      } catch (e) {
        console.log(e);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>{movie.title}</h1>
      <h2>{movie.director}</h2>
    </div>
  );
}

export default Exercise19_1;
