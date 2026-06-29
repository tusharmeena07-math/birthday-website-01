import Layout from "./Layout";

function Timeline({ onContinue }) {
  return (
    <Layout>
      <h1>📖 Chapter 4</h1>

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

      <button onClick={onContinue}>
        Open Memories 📸
      </button>
    </Layout>
  );
}

export default Timeline;