import { useState, useEffect, useRef, useMemo } from "react";
import "./App.css";

function App() {
const stars = useMemo(
  () =>
    Array.from({ length: 200 }, () => ({
      width: Math.random() * 3 + 1,
      height: Math.random() * 3 + 1,
      top: Math.random() * 100,
      left: Math.random() * 100,
    })),
  []
);

const audioRef = useRef(null);

const [isUnlocked, setIsUnlocked] = useState(false);
const [password, setPassword] = useState("");
const [showStory, setShowStory] = useState(false);

const [showChat, setShowChat] = useState(false);
const [showNarration, setShowNarration] = useState(false);
const [showTimeline, setShowTimeline] = useState(false);
const [showGallery, setShowGallery] = useState(false);

const [messageStep, setMessageStep] = useState(1);
const [isTyping, setIsTyping] = useState(false);

const [narrationStep, setNarrationStep] = useState(0);

const [isPlaying, setIsPlaying] = useState(false);
const [showLetter, setShowLetter] = useState(false);
const [openLetter, setOpenLetter] = useState(false);
const [typedText, setTypedText] = useState("");
const [showEnding, setShowEnding] = useState(false);
const letter = `
Your letter will appear here...

This is just a placeholder for now.

Later, you can write anything you want,
and it will automatically type itself.
`;
useEffect(() => {
  if (openLetter) {
    setTypedText("");

    let index = 0;

    const interval = setInterval(() => {
      setTypedText(letter.slice(0, index));

      index++;

      if (index > letter.length) {
        clearInterval(interval);
      }
    }, 40);

    return () => clearInterval(interval);
  }
}, [openLetter]);

useEffect(() => {
if (showChat) {
setMessageStep(1);


  setTimeout(() => setIsTyping(true), 500);

  setTimeout(() => {
    setIsTyping(false);
    setMessageStep(2);
  }, 1500);

  setTimeout(() => setIsTyping(true), 2000);

  setTimeout(() => {
    setIsTyping(false);
    setMessageStep(3);
  }, 3000);

  setTimeout(() => setIsTyping(true), 3500);

  setTimeout(() => {
    setIsTyping(false);
    setMessageStep(4);
  }, 4500);
}


}, [showChat]);

useEffect(() => {
if (showNarration) {
setNarrationStep(1);


  setTimeout(() => setNarrationStep(2), 2000);
  setTimeout(() => setNarrationStep(3), 4000);
}


}, [showNarration]);

return (
<> <div className="stars">
{stars.map((star, i) => (
  <div
    key={i}
    className="star"
    style={{
      width: `${star.width}px`,
      height: `${star.height}px`,
      top: `${star.top}%`,
      left: `${star.left}%`,
    }}
  />
))} </div>


  {!isUnlocked ? (
    <div className="hero page-enter">
      <div className="hero-content">
        <h1>✨ A Secret Universe ✨</h1>

        <p>A universe created for one special person.</p>

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
<br />
        <button
          onClick={() => {
            if (password === "starlight") {
              setIsUnlocked(true);
            } else {
              alert("Wrong Password ❤️");
            }
          }}
        >
          Unlock ✨
        </button>
      </div>
    </div>
  ) : !showStory ? (
    <div className="hero page-enter">
      <div className="hero-content">
        <h1>Happy Birthday ❤️</h1>

        <p>
          There are billions of people in this universe.
          <br />
          Somehow, every road led me to you.
        </p>

        <button onClick={() => setShowStory(true)}>
          Enter The Story ✨
        </button>
      </div>
    </div>
  ) : !showChat ? (
    <div className="hero page-enter">
      <div className="hero-content">
        <h1>Chapter 1</h1>

        <p>
          Before you,
          <br />
          my days were ordinary.
        </p>

        <p>Then one message changed everything.</p>

        <p>
          And suddenly,
          <br />
          the universe felt different.
        </p>

        <button onClick={() => setShowChat(true)}>
          Continue ✨
        </button>
      </div>
    </div>
  ) : !showNarration ? (
    <div className="hero page-enter">
      <div className="hero-content">
        <h1>Chapter 2</h1>

        <div className="chat-box">
          {messageStep >= 1 && (
            <div className="message left">Hey 🙂</div>
          )}

          {messageStep >= 2 && (
            <div className="message right">Hi 🙂</div>
          )}

          {messageStep >= 3 && (
            <div className="message left">
              How was your day?
            </div>
          )}

          {messageStep >= 4 && (
            <div className="message right">
              Better now 😊
            </div>
          )}
        </div>

        {isTyping && (
          <div className="typing">
            • • •
          </div>
        )}

        <button
          onClick={() => setShowNarration(true)}
        >
          Continue →
        </button>
      </div>
    </div>
  ) : !showTimeline ? (
    <div className="hero page-enter">
      <div className="hero-content">
        <h1>Chapter 3</h1>

        {narrationStep >= 1 && (
          <p className="fade-text">
            That conversation lasted only a few minutes.
          </p>
        )}

        {narrationStep >= 2 && (
          <p className="fade-text">
            But somehow...
          </p>
        )}

        {narrationStep >= 3 && (
          <p className="fade-text">
            it stayed with me forever.
          </p>
        )}

        <button
          onClick={() => setShowTimeline(true)}
        >
          Continue →
        </button>

        <button
          onClick={() => {
            if (!isPlaying) {
              audioRef.current.play();
              setIsPlaying(true);
            } else {
              audioRef.current.pause();
              setIsPlaying(false);
            }
          }}
        >
          {isPlaying
            ? "⏸ Pause Music"
            : "🎵 Play Our Song"}
        </button>
      </div>
    </div>
  ) : !showGallery ? (
    <div className="hero page-enter">
      <div className="hero-content">
        <h1>Chapter 4</h1>

        <div className="timeline">
          <div className="timeline-item">
            ✨ The First Message
          </div>

          <div className="timeline-item">
            📞 The First Call
          </div>

          <div className="timeline-item">
            😂 The First Laugh
          </div>

          <div className="timeline-item">
            🥺 The First Fight
          </div>

          <div className="timeline-item">
            ❤️ The First "I Miss You"
          </div>

          <div className="timeline-item">
            🎂 Today
          </div>
        </div>

        <button
          onClick={() => setShowGallery(true)}
        >
          Open Memories 📸
        </button>
      </div>
    </div>
  ) : !showLetter ? (
    <div className="hero page-enter">
      <div className="hero-content">
        <h1>Memory Gallery ❤️</h1>

        <div className="gallery">
          <img src="/photos/photo1.jpg" alt="" />
          <img src="/photos/photo2.jpg" alt="" />
          <img src="/photos/photo3.jpg" alt="" />
          <img src="/photos/photo4.jpg" alt="" />
          <img src="/photos/photo5.jpg" alt="" />
          <img src="/photos/photo6.jpg" alt="" />
          <img src="/photos/photo7.jpg" alt="" />
          <img src="/photos/photo8.jpg" alt="" />
          <img src="/photos/photo9.jpg" alt="" />
          <img src="/photos/photo10.jpg" alt="" />
        </div>
        <button onClick={() => setShowLetter(true)}>
  One Last Thing ❤️
</button>
      </div>
    </div>
  ) : !showEnding ? (
  <div className="hero page-enter">
  <div className="hero-content">

    {!openLetter ? (
      <>
        <h1>💌 One Last Thing</h1>

        <p>
          Before you leave,
          there's something I want you to read...
        </p>

        <button
          onClick={() => setOpenLetter(true)}
        >
          Open My Letter ❤️
        </button>
      </>
    ) : (
      <>
        <div className="hearts">
  <span>❤️</span>
  <span>❤️</span>
  <span>❤️</span>
  <span>❤️</span>
  <span>❤️</span>
  <span>❤️</span>
  <span>❤️</span>
  <span>❤️</span>
  <span>❤️</span>
</div>
        <h1>💌 For You</h1>

        <p className="typewriter">
  {typedText}
  <span className="cursor">|</span>
</p> 
        {typedText.length === letter.length && (
  <button
    style={{ marginTop: "40px" }}
    onClick={() => setShowEnding(true)}
  >
    One Final Surprise ✨
  </button>
)}
      </>
    )}

  </div>
</div>

) : (
  <div className="hero page-enter">
    <div className="hero-content">

      <h1>❤️ Happy Birthday ❤️</h1>

      <p className="fade-text">
        Thank you for being part of my universe.
      </p>

      <p className="fade-text">
        Some people become memories.
      </p>

      <p className="fade-text">
        Some become stories.
      </p>

      <p className="fade-text">
        And some become a little piece
        of your heart forever.
      </p>

      <div className="signature">
        ✨ Made With Love ✨
        <br />
        by Tushar
      </div>

    </div>
  </div>
)}

  <audio
    ref={audioRef}
    src="/music/perfect.mp3"
    loop
  />
</>

);
}

export default App;
