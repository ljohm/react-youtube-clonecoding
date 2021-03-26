import logo from "./logo.svg";
import styles from "./app.module.css";
import React, { useEffect, useState } from "react";
import VideoList from "./components/video_list/video_list";
import SearchHeader from "./components/search_header/search_header";

function App({ youtube }) {
  const [videos, setVideos] = useState([]);

  const search = (query) => {
    youtube //
      .search(query)
      .then((result) => {
        setVideos(result);
      });
  };

  useEffect(() => {
    youtube
      .mostPopular() //
      .then((videos) => setVideos(videos));
  }, []);

  return (
    <div>
      <SearchHeader onSearch={search} />
      <div className={styles.content}>
        <VideoList videos={videos} />
      </div>
    </div>
  );
}
export default App;
