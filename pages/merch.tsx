import Image from "next/image";
import { Hero, Layout } from "../components";

const Merch = () => {
  return (
    <Layout>
      <Hero>
        <Image
          src="/ijshockij.png"
          alt="ijshockij logo"
          width={500}
          height={500}
        />
        <>De exclusieve ijshockij merchandise is uitverkocht!</>
        <p>Hou onze website in de gaten voor nieuwe merchandise.</p>
      </Hero>
    </Layout>
  );
};

export default Merch;
