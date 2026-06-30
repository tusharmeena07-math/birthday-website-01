import Layout from "./Layout";

function WelcomeScreen({ onContinue }) {
  return (
    <Layout>
      <h1 className="birthday-title">
        
        <span>❤️Happy Birthday❤️</span>
       
      </h1>

      <p>
        There are billions of people in this universe. Somehow... every road led me to you.
         And now I can't imagine a single tomorrow without your smile, your laughter, and the love you bring into my life.
       <br />
      
      </p>

      <button onClick={onContinue}>
        Enter The Story ✨
      </button>
    </Layout>
  );
}

export default WelcomeScreen;