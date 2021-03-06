import { useState, useEffect } from "react";
import axios from "axios";

function FetchedData() {
  const [data, setData] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    (async () => {
      try {
        const url =
          "http://go-vegan.co.il/API2.0/meals.php?lat=32.0731082&lng=34.7805689&radius=5000&address=%D7%94%D7%95%D7%91%D7%A8%D7%9E%D7%9F+18%2C+%D7%AA%D7%9C+%D7%90%D7%91%D7%99%D7%91-%D7%99%D7%A4%D7%95&version=4&uuid=563909759323956&_=1653936882606";
        const { data } = await axios.get(url, {
          signal: controller.signal,
        });
        setData(data);
      } catch (e) {
        console.log(e);
      }
    })();
    return () => {
      controller.abort();
    };
  }, []);

  return <>{JSON.stringify(data)}</>;
}

export default FetchedData;
