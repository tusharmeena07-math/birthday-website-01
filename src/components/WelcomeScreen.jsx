import Layout from "./Layout";

function WelcomeScreen({ onContinue }) {
  return (
    <Layout>
      <h1>🎉 Happy Birthday ❤️</h1>

      <p>
        There are billions of people
        <br />
        in this universe.
      </p>

      <p>
        Somehow...
        <br />
        every road led me to you.
      </p>

      <button onClick={onContinue}>
        Enter The Story ✨
      </button>
    </Layout>
  );
}

export default WelcomeScreen;