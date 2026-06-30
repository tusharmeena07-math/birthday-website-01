import { motion } from "framer-motion";

function AnimatedEnvelope({

opening,

letterOut,

paperOpen,

typedText,

letter,

onOpen,

}) {
  return (
    <motion.div
      className="animated-envelope"
      onClick={onOpen}
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
      {/* Paper */}
      <div
  className={`paper
    ${letterOut ? "paper-out" : ""}
    ${paperOpen ? "paper-open" : ""}
  `}
>

  {paperOpen && (

    <div className="paper-content">

      <h2>
        💌 For You
      </h2>

      <p className="paper-text">

        {typedText}

        {typedText.length <
          letter.length && (
          <span className="cursor">
            |
          </span>
        )}

      </p>

    </div>

  )}

</div>

      {/* Back */}
      <div className="back" />

      {/* Left Fold */}
      <div className="left-fold" />

      {/* Right Fold */}
      <div className="right-fold" />

      {/* Bottom Fold */}
      <div className="bottom-fold" />

      {/* Flap */}
      <div
        className={`flap ${
          opening ? "flap-open" : ""
        }`}
      />
    </motion.div>
  );
}

export default AnimatedEnvelope;