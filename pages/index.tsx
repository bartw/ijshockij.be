import Head from "next/head";
import { config, dom } from "@fortawesome/fontawesome-svg-core";
import { Cards, Card, Container, Footer, Section, Video } from "../components";

const videos = [
  "BDJeG2Zr4hw",
  "36JkgCw5iUE",
  "d6QZrAkdcsQ",
  "tuntNVSO_x8",
  "OFVvd4S1us8",
  "c7sXo-1uTuE",
];

config.autoAddCss = false;

const Home = () => (
  <div>
    <Head>
      <title>ijshockij</title>
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <style>{dom.css()}</style>
    </Head>

    <main className="bg-gray-50 text-gray-900 min-h-full flex flex-col">
      <header className="pt-4">
        <Container>
          <h1 className="text-lg">ijshockij</h1>
        </Container>
      </header>
      <section className="pt-16">
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
      <Section className="bg-green-500">
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
        <div className="mt-2">
          <Cards>
            <Card>
              <div className="bg-indigo-500 text-indigo-50 p-8 rounded h-48 sm:mr-8">
                <h3 className="font-semibold uppercase">Paaskamp</h3>
                <ul className="mt-2">
                  <li>Vrijdag 09-04-2021</li>
                  <li>Zaterdag 10-04-2021</li>
                  <li>Zondag 11-04-2021</li>
                </ul>
              </div>
            </Card>
            <Card>
              <div className="bg-indigo-500 text-indigo-50 p-8 rounded h-48">
                <h3 className="font-semibold uppercase">TBD</h3>
                <p className="mt-2">
                  Laat je e-mail achter en blijf op de hoogte van onze events.
                </p>
              </div>
            </Card>
          </Cards>
        </div>
      </Section>
      <Section className="bg-gray-50">
        <header>
          <h2 className="text-lg">Merchandise</h2>
        </header>
        <div className="mt-2">
          <Cards>
            <Card>
              <div className="bg-indigo-500 text-indigo-50 p-8 rounded h-48">
                <h3 className="font-semibold uppercase">Coming soon!</h3>
                <p className="mt-2">
                  Laat je e-mail achter en blijf op de hoogte van onze
                  merchandise.
                </p>
              </div>
            </Card>
          </Cards>
        </div>
      </Section>
      <Footer />
    </main>
  </div>
);

export default Home;
