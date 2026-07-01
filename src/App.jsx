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
  // -------------------------
  // Audio
  // -------------------------

  const audioRef = useRef(null);

  const [isPlaying, setIsPlaying] =
    useState(false);

  // Start music once

  function startMusic() {
    if (!audioRef.current || isPlaying)
      return;

    audioRef.current.volume = 0.15;

    audioRef.current
      .play()
      .catch(() => {});

    setIsPlaying(true);
  }

  // Toggle play / pause

  function playMusic() {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current
        .play()
        .catch(() => {});
    }

    setIsPlaying(!isPlaying);
  }

  // -------------------------
  // Navigation
  // -------------------------

  const [page, setPage] =
    useState("password");

  const [password, setPassword] =
    useState("");

  // -------------------------
  // Letter
  // -------------------------

  const letter = `
Happy birthday my love 💗 to my beautiful girl, May all your dreams and wishes come true, and may life always bless you with good health, endless joy.  You truly deserve the best of everything.  Last time birthday pe maine ek continuation send Kiya tha 2024 wale birthday ka ye bhi usi series me hai , pata bhi ni chala ek saal or humne kaat liya... Ye saal humari life ka changing point bhi bol skte hai.. dono ab alg alg raaston pe chl rhe hai dono ki life me major changes aaye hai beech me to kafi ganda breakdown bhi hua(mera), tumhare saath bhi iss saal kafi kuch hua job ka interview and all phir akhir me ek job bhi mil gyi Jo ki bohot acchi baat hai uske liye veryyy veryyy congratulations my love💗 I'm so proud of you. Ye choti baat nhi hai ki ek ghr pe rhke pdhke ek govt job nikaal lena.
Mai chahta hu tumhara RBI bhi ho jaye or uske baad RBI grade B bhi ho jaye. Mai chahta hu tumhara sb hojaye jo tum chahti ho, kyuki tu khush to meri zindagi bhi asaan kyuki mujhe meri dikkatein utni preshan ni krti jitni teri kr deti hai (halaki mere ek do last month acche ni gye pr adjust hogya hu ab mai comfortable hogya hu iss life me).

Or is saal ke baare me baat kru to hum do baar mile or dono hi khaas the mere liye toh , ab humari life milne wali thodi sort to hogyi hai atleast mai to Delhi hu kabhi tu ayegi to milna hoga hi humara, aur aur aurrrrrr 🤧 last meet up ki baat to Krna kaise bhul skta hu...... It was a wonderful day/night. Mai apni Puri zindagi me ye din nhi bhul skta humne proper quality time spend Kiya Jo ki Hume kafi jrurat thi khaskar mujhe. Apni mohtarma ke seene se lag ke roone ka sukoon hi alg hai.. aisa lg rha tha ki sb andr se nikal gya , sara bojh wahi rh gya.  Thank you meri Jaan for everything u did for me, every single thing. Every time you've stood by me, thank you so much for being understood for lot of things. Mere andr abhi bhi kafi kamiya hai, mai thik kr rha hu koshish kr rha hu dheere dheere mai pahle se kafi behtar hogya hu sirf tumhari wjha se.  You are not just love of my life -- you are my peace, my comfort, my safest place, and the reason so many of my days begin and end with a smile.

Mai janta hu life hum dono pe humesha utna easy nhi rhegi, na pahle bhi rahi hai pr I want you to know one thing that I will always choose us. I will always choose you. No matter how many years pass, I want to keep holding your hand through every joy and every tough time.

If I could give you one gift today, it would be the ability to see yourself through my eyes. Then you would know just how incredibly special, beautiful, and irreplaceable you are. You are my favourite Hello, my hardest goodbye, and the best thing that has ever happened to me.

Once again Happy Birthday my sweetheart 💗 thank you for being exactly who you are.  May God bless you, and keep eating healthy food (sometimes home made fast food) and be hydrated.  I love you 🫶 today, tomorrow, and every day after that. No matter where life takes us, part of my heart will always belong to you.

One and only your 🌷.
`;

  // -------------------------
  // Render
  // -------------------------

  return (
    <>
      <Background />

      <audio
        ref={audioRef}
        src="/music/perfect.mp3"
        preload="auto"
        playsInline
        loop
      />

      {page === "password" && (
        <PasswordScreen
          password={password}
          setPassword={setPassword}
          onUnlock={() => {
            if (
              password ===
              "tulip"
            ) {
              setPage("welcome");
            } else {
              alert(
                "Wrong Password ❤️"
              );
            }
          }}
        />
      )}

      {page === "welcome" && (
        <WelcomeScreen
          onContinue={() => {
            startMusic();
            setPage("chapter1");
          }}
        />
      )}

      {page === "chapter1" && (
        <ChapterOne
          onContinue={() =>
            setPage("chat")
          }
        />
      )}

      {page === "chat" && (
        <ChatScene
          onContinue={() =>
            setPage("narration")
          }
        />
      )}

      {page === "narration" && (
        <Narration
          isPlaying={isPlaying}
          onMusicToggle={playMusic}
          onContinue={() =>
            setPage("timeline")
          }
        />
      )}

      {page === "timeline" && (
        <Timeline
          onContinue={() =>
            setPage("gallery")
          }
        />
      )}

      {page === "gallery" && (
        <Gallery
          onContinue={() =>
            setPage("letter")
          }
        />
      )}

      {page === "letter" && (
        <Letter
          letter={letter}
          onFinish={() =>
            setPage("ending")
          }
        />
      )}

      {page === "ending" && (
        <Ending />
      )}
    </>
  );
}

export default App;