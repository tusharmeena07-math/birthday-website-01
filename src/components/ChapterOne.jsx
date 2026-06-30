import Layout from "./Layout";

function ChapterOne({ onContinue }) {
  return (
    <Layout>
      <h1>📖 Chapter 1</h1>

      <p>
        Before you... I was just existing or I had no idea ki ek din ye ladki aake sb change kr degi.
         Pata bhi nahi tha ki koi ladki ayegi bhi nahi or wo bhi clg ke last year mein I never even thought of this. 
         Phir ek din.....sb change hogya. 
        <br />
        
        Then one message
        quietly changed everything.
      </p>

      <p>
        
      </p>

      <button onClick={onContinue}>
        Continue ✨
      </button>
    </Layout>
  );
}

export default ChapterOne;