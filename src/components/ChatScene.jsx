import { useEffect, useState } from "react";
import Layout from "./Layout";

function ChatScene({ onContinue }) {
  const [messageStep, setMessageStep] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const timers = [];

    // Message 1
    timers.push(
      setTimeout(() => {
        setMessageStep(1);
        setIsTyping(true);
      }, 600)
    );

    // Message 2
    timers.push(
      setTimeout(() => {
        setIsTyping(false);
        setMessageStep(2);
      }, 1800)
    );

    timers.push(
      setTimeout(() => {
        setIsTyping(true);
      }, 2300)
    );

    // Message 3
    timers.push(
      setTimeout(() => {
        setIsTyping(false);
        setMessageStep(3);
      }, 3500)
    );

    timers.push(
      setTimeout(() => {
        setIsTyping(true);
      }, 4000)
    );

    // Message 4
    timers.push(
      setTimeout(() => {
        setIsTyping(false);
        setMessageStep(4);
      }, 5200)
    );

    // Continue Button
    timers.push(
      setTimeout(() => {
        setShowButton(true);
      }, 6000)
    );

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <Layout>
      <h1>💬 Chapter 2</h1>

      <div className="chat-box">
        {messageStep >= 1 && (
          <div className="message left">
            Hey 👋
          </div>
        )}

        {messageStep >= 2 && (
          <div className="message right">
            Hi 😊
          </div>
        )}

        {messageStep >= 3 && (
          <div className="message left">
            How was your day?
          </div>
        )}

        {messageStep >= 4 && (
          <div className="message right">
            Better now...
            <br />
            You're here ❤️
          </div>
        )}

        {isTyping && (
          <div className="typing">
            ● ● ●
          </div>
        )}
      </div>

      {showButton && (
        <button onClick={onContinue}>
          Continue ✨
        </button>
      )}
    </Layout>
  );
}

export default ChatScene;