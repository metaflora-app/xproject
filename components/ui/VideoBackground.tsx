"use client";

interface VideoBackgroundProps {
  src: string;
  posterSrc?: string;
  overlayClassName?: string;
  className?: string;
}

export function VideoBackground({
  src,
  posterSrc,
  overlayClassName = "video-overlay",
  className = "",
}: VideoBackgroundProps){
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster={posterSrc}
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={src} type="video/mp4" />
      </video>
      <div className={overlayClassName} />
    </div>
  );
}
