import { useState } from "react";

const useHttp = (method = "GET") => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const request = async (url, action) => {
    try {
      setIsLoading(true);
      const response = await fetch(url, {
        method: method ?? "GET",
      });

      if (!response.ok) throw new Error("Something went wrong");

      const data = await response.json();
      setIsLoading(false);
      action(data);
    } catch (e) {
      setError(e.message);
    }
  };

  return { request, isLoading, error };
};

export default useHttp;
