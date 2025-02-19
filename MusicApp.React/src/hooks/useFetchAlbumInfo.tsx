import { useState, useEffect } from "react";
import { GetFolderApiResponse } from "../types";

const useFetchAlbumInfo = (albumPath: string) => {
  const [data, setData] = useState<GetFolderApiResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:1234/api/album-details?folderPath=${albumPath}`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json();
        setData(result as GetFolderApiResponse);
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

export default useFetchAlbumInfo;
