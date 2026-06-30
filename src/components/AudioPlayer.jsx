import { useEffect, useRef } from "react";

function AudioPlayer() {
  const audioRef = useRef(null);

  useEffect(() => {
    if (!audioRef.current) return;

    audioRef.current.volume = 0.2;
    audioRef.current.loop = true;
  }, []);

  return (
    <audio
      id="bg-music"
      ref={audioRef}
      src="/music/song.mp3"
      preload="auto"
    />
  );
}

export default AudioPlayer;