import Layout from "./Layout";

function PasswordScreen({
  password,
  setPassword,
  onUnlock,
}) {
  return (
    <Layout>
      <h1>✨ A Secret Universe ✨</h1>

      <p>
        A universe created for one special person.
      </p>

      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <br />
      <br />

      <button onClick={onUnlock}>
        Unlock ✨
      </button>
    </Layout>
  );
}

export default PasswordScreen;