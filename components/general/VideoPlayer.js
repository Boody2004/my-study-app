import React from "react";
import ReactPlayer from "react-player";
import { useState, useEffect } from "react";

const VideoPlayer = (props) => {
  const [items, setItems] = useState([]);
  const fetchData = () => {
    fetch(
      `https://online-lessons-api.herokuapp.com/gettingStarted/${props.urlApi}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setItems(data);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {items.length > 0 && (
        <div className="mb-40">
          {items.map((item) => (
            <div key={item.id} className="mb-20">
              <div className="flex justify-between text-light mb-10">
                <h1 className="font-bold text-5xl">{item.titleEn}</h1>
                <h1 className="font-bold text-5xl">{item.titleAr}</h1>
              </div>
              <div className="flex justify-center">
                <ReactPlayer
                  controls
                  url={item.video}
                  onReady={() => console.log("onReady callback")}
                  onStart={() => console.log("onStart callback")}
                  onPause={() => console.log("onPause callback")}
                  onEnded={() => console.log("onEnded callback")}
                  onError={() => console.log("onError callback")}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
