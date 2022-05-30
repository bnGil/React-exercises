import { useState, useEffect } from "react";
import { API } from "./api/countriesAPI";

function Exercise19_2() {
  const [countries, setCountries] = useState([]);
  const [term, setTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await API.get("/all");
        const countriesNames = data.map((country) => {
          return { name: country.name, id: country.alpha3Code };
        });
        setCountries(countriesNames);
        console.log(countriesNames);
      } catch (e) {
        console.log(e);
      }
    };

    fetchData();
  }, []);

  const renderedCountries = (str) => {
    const countriesToRender = countries.filter((country) =>
      country.name.toLowerCase().includes(str.toLowerCase())
    );
    return (
      <ul>
        {countriesToRender.map((country) => {
          return <li key={country.id}>{country.name}</li>;
        })}
      </ul>
    );
  };

  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input
        type="text"
        id="search"
        onChange={(e) => setTerm(e.target.value)}
        value={term}
      />
      {renderedCountries(term)}
    </div>
  );
}

export default Exercise19_2;
