import { useEffect, useState } from "react";
import "./server";

const useFetchData = (link) => {
  const [data, setData] = useState(undefined);
  const [fetchStatus, setFetchStatus] = useState("pending");

  const fetchDataFromAPI = async () => {
    try {
      const response = await fetch(link);
      if (!response.ok) {
        throw {
          message: "Failed to fetch",
          statusText: response.statusText,
          status: response.status,
        };
      }
      const data = await response.json();
      setData((currentData) => (currentData = data));
      setFetchStatus("resolved");
    } catch (error) {
      setFetchStatus("error");
      console.error(error.status + ", " + error.statusText)
    }
  };

  useEffect(() => {
    fetchDataFromAPI();
  }, []);

  return [data, fetchStatus];
};

export default useFetchData;
