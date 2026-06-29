import Layout from "./Layout";

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
          />
        ))}
      </div>

      <button onClick={onContinue}>
        One Last Thing ❤️
      </button>
    </Layout>
  );
}

export default Gallery;