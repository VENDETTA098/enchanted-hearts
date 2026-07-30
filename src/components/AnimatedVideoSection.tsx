
import "./AnimatedVideoSection.css";
import React, { useState } from "react";

const AnimatedVideoSection: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const videos = [
    {
      src: "/videos/video1.mp4",
      caption: "You are The Best 💕",
      delay: 0,
    },
    {
      src: "/videos/video2.mp4",
      caption: "Beautiful Moments 🌸",
      delay: 0.2,
    },
    {
      src: "/videos/video3.mp4",
      caption: "Forever You❤️",
      delay: 0.4,
    },
  ];

  return (
    <section className="video-section">
      <div className="video-header">
        <h2> My Bandariya 🎥</h2>
        <p>Every video holds a piece of our heart ❤️</p>
      </div>

      <div className="video-grid">
        {videos.map((video, index) => (
          <div
            key={index}
            className={`video-card ${
              hoveredIndex === index ? "hovered" : ""
            }`}
            style={{ animationDelay: `${video.delay}s` }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <video
  className="video-player"
  src={video.src}
  autoPlay
  muted
  loop
  playsInline
  preload="auto"
/>

            <div className="video-overlay">
              <span className="play-icon">▶</span>
              <p>{video.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AnimatedVideoSection;