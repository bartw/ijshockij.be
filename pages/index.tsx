import Image from "next/image";
import { Events, Hero, Layout, Newsletter } from "../components";

const Home = () => (
  <Layout>
    <Hero>
      <Image src="/bas.png" alt="Coach Bas" width={500} height={500} priority />
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
