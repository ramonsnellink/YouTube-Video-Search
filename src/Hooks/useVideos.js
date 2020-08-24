import { useState, useEffect } from "react";
import youtube from "../api/youtube";

const useVideos = (defaultSearchTerm) => {
  const KEY = "AIzaSyAbZUtiwhSqK7h3rIjSnZchY6mRjeMkwI0";

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    // set a default first Search Term. We do this on the onTermSubmit, which handles the search query.
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const search = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
        part: "snippet",
        maxResults: 5,
        type: "video",
        key: KEY,
      },
    });
    //set the videos state to the objects that return from the API.
    //set the selectedVideo to the first of the retrieved videos.

    setVideos(response.data.items);
  };

  return [videos, search];
};

export default useVideos;
