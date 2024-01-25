import React from "react";
import "./VideoCard.css";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";

function VideoCard({ image, title, channel, views, timestamp, channelImage }) {
  return (
    <Link to="/video-detail"> {/* Change "/video-detail" to the actual route for your video detail page */}
      <div className="videoCard">
        <img className="videoCard__thumbnail" src={image} alt="" />
        <div className="videoCard__info">
          <Avatar
            className="videoCard__avatar"
            alt={channel}
            src={channelImage}
          />
          <div className="videoCard__text">
            <h4>{title}</h4>
            <p>{channel}</p>
            <p>
              {views} • {timestamp}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default VideoCard;
