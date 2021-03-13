import Head from "next/head";
import { Video } from "../components";

const Home = () => (
  <div>
    <Head>
      <title>ijshockij</title>
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    </Head>

    <main className="mx-auto max-w-6xl">
      <header className="p-4">
        <h1 className="text-lg">ijshockij</h1>
      </header>
      <section className="bg-gray-100 sm:flex">
        <img src="/bas.png" className="sm:w-1/2 sm:order-1" />
        <div className="p-4 sm:flex-1 sm:self-center">
          <p className="text-2xl">IJshockey voor iedereen, zelfs Steven...</p>
          <p className="text-xl">Fun, team, nog allemaal text</p>
        </div>
      </section>
      <section className="mt-4">
        <header className="p-4">
          <h2 className="text-lg">Videos</h2>
        </header>
        <div className="sm:flex sm:overflow-x-scroll">
          <Video id="BDJeG2Zr4hw" />
          <Video id="36JkgCw5iUE" />
          <Video id="d6QZrAkdcsQ" />
          <Video id="tuntNVSO_x8" />
          <Video id="OFVvd4S1us8" />
          <Video id="c7sXo-1uTuE" />
        </div>
      </section>
      <footer className="mt-4 p-4 text-center text-sm bg-gray-100">
        © 2021 - ijshockij
      </footer>
    </main>
  </div>
);

export default Home;
