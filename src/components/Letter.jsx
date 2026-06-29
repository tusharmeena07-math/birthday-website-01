import { useEffect, useState } from "react";
import Layout from "./Layout";

function Letter({
  letter,
  onFinish,
}) {
  const [opening, setOpening] = useState(false);
  const [showLetter, setShowLetter] = useState(false);
  const [typedText, setTypedText] = useState("");

  const handleOpen = () => {
    if (opening) return;

    setOpening(true);

    setTimeout(() => {
      setShowLetter(true);
    }, 1200);
  };

  useEffect(() => {
    if (!showLetter) return;

    let index = 0;

    const interval = setInterval(() => {
      setTypedText(letter.slice(0, index));
      index++;

      if (index > letter.length) {
        clearInterval(interval);
      }
    }, 35);

    return () => clearInterval(interval);
  }, [showLetter, letter]);

  return (
    <Layout>

      {!showLetter ? (
        <>
          <h1>💌 One Last Thing</h1>

          <p>
            Before you leave...
            <br />
            there's something I want you to read.
          </p>

          <div
            className={`envelope ${opening ? "open" : ""}`}
            onClick={handleOpen}
          >
            <div className="envelope-back"></div>

            <div className="letter-paper"></div>

            <div className="envelope-left"></div>

            <div className="envelope-right"></div>

            <div className="envelope-bottom"></div>

            <div className="envelope-flap"></div>
          </div>

          <p
            style={{
              marginTop: 25,
              opacity: .8
            }}
          >
            Tap the envelope ❤️
          </p>

        </>
      ) : (
        <>

          <h1>💌 For You</h1>

          <p className="typewriter">
            {typedText}

            {typedText.length < letter.length && (
              <span className="cursor">|</span>
            )}
          </p>

          {typedText.length === letter.length && (
            <button
              style={{ marginTop: 40 }}
              onClick={onFinish}
            >
              One Final Surprise ✨
            </button>
          )}

        </>
      )}

    </Layout>
  );
}

export default Letter;