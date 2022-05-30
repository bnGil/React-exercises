import { useState, useEffect } from "react";
import { API } from "./api/algoliaAPI";

import "./Exercise19_3.css";

function Exercise19_3() {
  const [results, setResults] = useState([]);
  const [term, setTerm] = useState("hooks");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const { data } = await API.get("/search", {
        params: {
          query: term,
        },
      });

      const relevantData = data.hits.map((ele) => {
        return { title: ele.title, url: ele.url };
      });
      setResults(relevantData);
    } catch (e) {
      console.log(e);
    }
    setIsLoading(false);
  };

  const renderList = () => {
    return (
      <ul>
        {results.map((result) => {
          return (
            <li key={result.title}>
              <a href={result.url}>{result.title}</a>
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <div className="container">
      <div>
        <label htmlFor="search">Search: </label>
        <input
          type="text"
          id="search"
          onChange={(e) => setTerm(e.target.value)}
          value={term}
        />
        <button onClick={fetchData}>Click</button>
      </div>
      {isLoading ? <h1>Loading...</h1> : renderList()}
    </div>
  );
}

export default Exercise19_3;
