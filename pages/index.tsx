import Head from "next/head";

const Home = () => (
  <div>
    <Head>
      <title>ijshockij</title>
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    </Head>

    <main
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100vw",
        height: "100vh",
        margin: 0,
        padding: 0,
      }}
    >
      <img src="/logo.png" style={{ maxWidth: "50%" }} />
    </main>
  </div>
);

export default Home;
