import Layout from "./Layout";

function ChapterOne({ onContinue }) {
  return (
    <Layout>
      <h1>📖 Chapter 1</h1>

      <p>
        Before you...
        <br />
        my days were ordinary.
      </p>

      <p>
        Then one message
        <br />
        quietly changed everything.
      </p>

      <p>
        And suddenly...
        <br />
        the universe felt different.
      </p>

      <button onClick={onContinue}>
        Continue ✨
      </button>
    </Layout>
  );
}

export default ChapterOne;