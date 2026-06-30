import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";


function ImageModal({
  image,
  currentIndex,
  totalImages,
  onClose,
  onNext,
  onPrev,
}) {
  // -------------------------
  // Swipe Gestures
  // -------------------------

 

  // -------------------------
  // Keyboard Navigation
  // -------------------------

  useEffect(() => {
    if (!image) return;

    document.body.style.overflow = "hidden";

    function handleKeyDown(e) {
      switch (e.key) {
        case "ArrowRight":
          onNext();
          break;

        case "ArrowLeft":
          onPrev();
          break;

        case "Escape":
          onClose();
          break;

        default:
          break;
      }
    }

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      document.body.style.overflow = "auto";

      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [image, onNext, onPrev, onClose]);

  // -------------------------
  // Render
  // -------------------------

  return (
    <AnimatePresence>
      {image && (
        <motion.div
          className="gallery-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.img
            src={image}
            alt="Memory"
            className="modal-image"
            tabIndex={0}
            initial={{
              scale: 0.85,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            exit={{
              scale: 0.85,
              opacity: 0,
            }}
            transition={{
              duration: 0.35,
            }}
            onClick={(e) =>
              e.stopPropagation()
            }
          />

          <div className="image-counter">
            {currentIndex + 1} / {totalImages}
          </div>

          <button
            className="close-modal"
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
          >
            ✕
          </button>

          <div className="modal-nav">
            <button
              className="nav-btn"
              onClick={(e) => {
                e.stopPropagation();
                onPrev();
              }}
            >
              ←
            </button>

            <button
              className="nav-btn"
              onClick={(e) => {
                e.stopPropagation();
                onNext();
              }}
            >
              →
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ImageModal;