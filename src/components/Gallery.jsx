import { useState } from "react";

import Layout from "./Layout";
import ImageModal from "./ImageModal";

const photos = [
  "/photos/photo1.jpg",
  "/photos/photo2.jpg",
  "/photos/photo3.jpg",
  "/photos/photo4.jpg",
  "/photos/photo5.jpg",
  "/photos/photo6.jpg",
  "/photos/photo7.jpg",
  "/photos/photo8.jpg",
  "/photos/photo9.jpg",
  "/photos/photo10.jpg",
];

function Gallery({ onContinue }) {
  // -------------------------
  // State
  // -------------------------

  const [selectedImage, setSelectedImage] = useState(null);

  // -------------------------
  // Current Image Index
  // -------------------------

  const currentIndex = photos.indexOf(selectedImage);

  // -------------------------
  // Navigation
  // -------------------------

  function nextImage() {
    if (currentIndex === -1) return;

    const nextIndex =
      (currentIndex + 1) % photos.length;

    setSelectedImage(
      photos[nextIndex]
    );
  }

  function prevImage() {
    if (currentIndex === -1) return;

    const prevIndex =
      (currentIndex - 1 + photos.length) %
      photos.length;

    setSelectedImage(
      photos[prevIndex]
    );
  }

  // -------------------------
  // Render
  // -------------------------

  return (
    <Layout>
      <h1>📸 Memory Gallery ❤️</h1>

      <div className="gallery">
        {photos.map((photo, index) => (
          <img
            key={index}
            src={photo}
            alt={`Memory ${index + 1}`}
            loading="lazy"
            onClick={() => setSelectedImage(photo)}
          />
        ))}
      </div>

      <ImageModal
        image={selectedImage}
        currentIndex={currentIndex}
        totalImages={photos.length}
        onClose={() => setSelectedImage(null)}
        onNext={nextImage}
        onPrev={prevImage}
      />

      <button onClick={onContinue}>
        One Last Thing ❤️
      </button>
    </Layout>
  );
}

export default Gallery;