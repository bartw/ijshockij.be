import Head from "next/head";
import {
  Button,
  Cards,
  Card,
  Container,
  Footer,
  Section,
  TextInput,
  Video,
} from "../components";

const videos = [
  "BDJeG2Zr4hw",
  "36JkgCw5iUE",
  "d6QZrAkdcsQ",
  "tuntNVSO_x8",
  "OFVvd4S1us8",
  "c7sXo-1uTuE",
];

const Home = () => (
  <div>
    <Head>
      <title>ijshockij</title>
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    </Head>

    <main className="bg-gray-50 min-h-full flex flex-col">
      <header className="pt-4">
        <Container>
          <h1 className="text-lg">ijshockij</h1>
        </Container>
      </header>
      <section className="pt-4">
        <Container>
          <div className="sm:flex">
            <img src="/bas.png" className="sm:w-1/2 sm:order-1" />
            <div className="p-4 sm:flex-1 sm:self-center">
              <p className="text-2xl">
                IJshockey voor iedereen, zelfs Steven...
              </p>
              <p className="text-xl">Fun, team, nog allemaal text</p>
            </div>
          </div>
        </Container>
      </section>
      <Section className="bg-gray-300">
        <header>
          <h2 className="text-lg">Videos</h2>
        </header>
        <Cards>
          {videos.map((video) => (
            <Card key={video}>
              <Video id={video} />
            </Card>
          ))}
        </Cards>
      </Section>
      <Section>
        <header>
          <h2 className="text-lg">Events</h2>
        </header>
        <Cards width="narrow">
          <Card>
            <div className="bg-gray-600 text-white rounded p-4">
              <h3>Paaskamp</h3>
              <ul>
                <li>Vrijdag 09-04-2021</li>
                <li>Zaterdag 10-04-2021</li>
                <li>Zondag 11-04-2021</li>
              </ul>
            </div>
          </Card>
        </Cards>
      </Section>
      <Section className="bg-gray-50">
        <header>
          <h2 className="text-lg">Merchandise</h2>
        </header>
        <p>Coming soon!</p>
        <p>Laat je e-mail achter en blijf op de hoogte.</p>
      </Section>
      <Footer />
    </main>
  </div>
);

export default Home;
