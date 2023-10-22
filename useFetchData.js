import { useEffect, useState } from "react";
import "./server";

const useFetchData = (link) => {
  const [data, setData] = useState(undefined);
  const [isFetched, setIsFetched] = useState(false);

  const fetchDataFromAPI = async () => {
    try {
      const response = await fetch(link);
      if (!response.ok) {
        throw new Error(response.status);
      }
      const data = await response.json();
      setData((currentData) => (currentData = data));
      setIsFetched(true);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchDataFromAPI();
  }, []);

  return [data, isFetched];
};

export default useFetchData;
