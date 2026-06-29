import Layout from "./Layout";

function Narration({
  narrationStep,
  onContinue,
  isPlaying,
  onMusicToggle,
}) {
  return (
    <Layout>
      <h1>🎵 Chapter 3</h1>

      {narrationStep >= 1 && (
        <p className="fade-text">
          That conversation lasted
          <br />
          only a few minutes.
        </p>
      )}

      {narrationStep >= 2 && (
        <p className="fade-text">
          But somehow...
          <br />
          it became one of my favorite memories.
        </p>
      )}

      {narrationStep >= 3 && (
        <p className="fade-text">
          Some conversations end.
          <br />
          Ours became a story. ❤️
        </p>
      )}

      <button onClick={onContinue}>
        Continue ✨
      </button>

      <button onClick={onMusicToggle}>
        {isPlaying ? "⏸ Pause Music" : "🎵 Play Our Song"}
      </button>
    </Layout>
  );
}

export default Narration;