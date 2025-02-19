import { useState, useEffect } from "react";
import { GetFoldersApiResponse } from "../types";

const useFetchFolders = () => {
  const [data, setData] = useState<GetFoldersApiResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:1234/api/get-folders");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json();
        setData(result as GetFoldersApiResponse);
      } catch (error) {
        console.error("Failed to get Data:", error);
        setError("Error Loading Data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, error, loading };
};

export default useFetchFolders;
