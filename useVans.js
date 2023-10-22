import { useEffect, useState } from "react";
import "./server";

const useVans = () => {
  const [vans, setVans] = useState(undefined);
  const [isFetched, setIsFetched] = useState(false);

  const fetchDataFromAPI = async () => {
    try {
      const response = await fetch("/api/vans/");
      if (!response.ok) {
        throw new Error(response.status);
      }
      const data = await response.json();
      setVans((vans) => (vans = data.vans));
      setIsFetched(true);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchDataFromAPI();
  }, []);

  return [isFetched, vans];
};

export default useVans;
