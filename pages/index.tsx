import Head from "next/head";
import { config, dom } from "@fortawesome/fontawesome-svg-core";
import {
  Events,
  Footer,
  Header,
  Hero,
  Newsletter,
  Sponsors,
} from "../components-v2";

config.autoAddCss = false;

const Home = () => (
  <div>
    <Head>
      <title>ijshockij</title>
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <style>{dom.css()}</style>
    </Head>

    <main className="bg-gray-200 text-gray-900">
      <Header />
      <Hero />
      <Events />
      <Newsletter />
      <Sponsors />
      <Footer />
    </main>
  </div>
);

export default Home;
