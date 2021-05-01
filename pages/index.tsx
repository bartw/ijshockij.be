import { Events, Hero, Layout, Newsletter } from "../components";

const Home = () => (
  <Layout>
    <Hero>
      <img src="/bas.png" alt="Coach Bas" />
      <>Wij leren jou ijshockey spelen!</>
      <p>
        Iedereen kan ijshockey spelen en wij staan klaar om jou hiermee te
        helpen.
      </p>
    </Hero>
    <Events />
    <Newsletter />
  </Layout>
);

export default Home;
