import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "./Layout";

function Letter({ letter, onFinish }) {
  // -------------------------
  // State
  // -------------------------

  const [opening, setOpening] = useState(false);
  const [showLetter, setShowLetter] = useState(false);
  const [typedText, setTypedText] = useState("");

  // -------------------------
  // Open Envelope
  // -------------------------

  function handleOpen() {
    if (opening) return;

    setOpening(true);

    setTimeout(() => {
      setShowLetter(true);
    }, 1200);
  }

  // -------------------------
  // Typewriter
  // -------------------------

  useEffect(() => {
    if (!showLetter) return;

    let index = 0;

    const timer = setInterval(() => {
      setTypedText(letter.slice(0, index));
      index++;

      if (index > letter.length) {
        clearInterval(timer);
      }
    }, 35);

    return () => clearInterval(timer);
  }, [showLetter, letter]);

  // -------------------------
  // Render
  // -------------------------

  return (
    <Layout>
      <AnimatePresence mode="wait">
        {!showLetter ? (
          <motion.div
            key="envelope"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
          >
            <h1>💌 One Last Thing</h1>

            <p>
              Before you leave...
              <br />
              there's something I want you to read.
            </p>

            <motion.div
              className={`envelope ${opening ? "open" : ""}`}
              onClick={handleOpen}
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.97,
              }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 18,
              }}
            >
              <div className="envelope-back"></div>

              <div className="letter-paper"></div>

              <div className="envelope-left"></div>

              <div className="envelope-right"></div>

              <div className="envelope-bottom"></div>

              <div className="envelope-flap"></div>
            </motion.div>

            <p
              style={{
                marginTop: 25,
                opacity: 0.8,
              }}
            >
              Tap the envelope ❤️
            </p>
          </motion.div>
        ) : (
          <motion.div
            key="letter"
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
          >
            <h1>💌 For You</h1>

            <p className="typewriter">
              {typedText}

              {typedText.length < letter.length && (
                <span className="cursor">|</span>
              )}
            </p>

            {typedText.length === letter.length && (
              <button
                style={{
                  marginTop: 40,
                }}
                onClick={onFinish}
              >
                One Final Surprise ✨
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
}

export default Letter;