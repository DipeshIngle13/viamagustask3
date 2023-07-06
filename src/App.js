import "./App.css";
import React, { useState } from "react";
import ReactPlayer from "react-player";

const videoThumbnails = [
  {
    link: "https://www.youtube.com/watch?v=LaQj636PJh0",
    thumbnail:
      "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
  },
  {
    link: "https://www.youtube.com/watch?v=BK_DLRiwLkQ",
    thumbnail:
      "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
  },
  {
    link: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
    thumbnail:
      "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
  },
  {
    link: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
    thumbnail:
      "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
  },
  {
    link: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
    thumbnail:
      "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
  },
  {
    link: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
    thumbnail:
      "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
  },
  {
    link: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
    thumbnail:
      "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
  },
  {
    link: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
    thumbnail:
      "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
  },
  {
    link: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
    thumbnail:
      "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
  },
  {
    link: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
    thumbnail:
      "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
  },
  {
    link: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
    thumbnail:
      "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
  },
  {
    link: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
    thumbnail:
      "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
  },
  {
    link: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
    thumbnail:
      "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
  },
  {
    link: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
    thumbnail:
      "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
  },
  {
    link: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
    thumbnail:
      "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
  },
  {
    link: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
    thumbnail:
      "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
  },
  {
    link: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
    thumbnail:
      "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
  },
];

function App() {
  const [selectedVideo, setSelectedVideo] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [showThumbnails, setShowThumbnails] = useState(false);

  const handleThumbnailClick = (index) => {
    setSelectedVideo(index);
    setPlaying(true);
  };

  return (
    <div className="App">
      <div
        className="player"
        onMouseEnter={() => setShowThumbnails(true)}
        onMouseLeave={() => setShowThumbnails(false)}
      >
        <ReactPlayer
          url={videoThumbnails[selectedVideo].link}
          playing={playing}
          controls={true}
          width={700}
          height={500}
        />
        {showThumbnails && (
          <div className="thumbnails-container">
            <div className="thumbnail">
              {videoThumbnails.map((thumbnail, index) => (
                <img
                  key={index}
                  src={thumbnail.thumbnail}
                  alt={`Thumbnail ${index + 1}`}
                  onClick={() => handleThumbnailClick(index)}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
