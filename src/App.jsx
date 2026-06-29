import { useState, useRef } from "react";
import "./App.css";

import PasswordScreen from "./components/PasswordScreen";
import WelcomeScreen from "./components/WelcomeScreen";
import ChapterOne from "./components/ChapterOne";
import ChatScene from "./components/ChatScene";
import Narration from "./components/Narration";
import Timeline from "./components/Timeline";
import Gallery from "./components/Gallery";
import Letter from "./components/Letter";
import Ending from "./components/Ending";
import Background from "./components/Background";

function App() {
  const audioRef = useRef(null);

  const [page, setPage] = useState("password");

  const [password, setPassword] = useState("");

  const [isPlaying, setIsPlaying] = useState(false);



  const letter = `
Your letter will appear here...

This is just a placeholder.

Later we will replace it with your real letter ❤️
`;

  const playMusic = () => {
    if (!isPlaying) {
      audioRef.current.play().catch(() => {});
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <>
      {page === "password" && (
        <PasswordScreen
          password={password}
          setPassword={setPassword}
          onUnlock={() => {
            if (password === "starlight") {
              setPage("welcome");
            } else {
              alert("Wrong Password ❤️");
            }
          }}
        />
      )}

      {page === "welcome" && (
        <WelcomeScreen
          onContinue={() => setPage("chapter1")}
        />
      )}

      {page === "chapter1" && (
        <ChapterOne
          onContinue={() => setPage("chat")}
        />
      )}

      {page === "chat" && (
        <ChatScene
          onContinue={() => setPage("narration")}
        />
      )}

      {page === "narration" && (
        <Narration
          isPlaying={isPlaying}
          onMusicToggle={playMusic}
          onContinue={() => setPage("timeline")}
        />
      )}

      {page === "timeline" && (
        <Timeline
          onContinue={() => setPage("gallery")}
        />
      )}

      {page === "gallery" && (
        <Gallery
          onContinue={() => setPage("letter")}
        />
      )}

      {page === "letter" && (
        <Letter
  letter={letter}
  onFinish={() => setPage("ending")}
/>
      )}

      {page === "ending" && <Ending />}
<Background />
      <audio
        ref={audioRef}
        src="/music/perfect.mp3"
        loop
      />
    </>
  );
}

export default App;