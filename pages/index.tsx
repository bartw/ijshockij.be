import Head from "next/head";
import { config, dom, IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faCalendarCheck } from "@fortawesome/free-regular-svg-icons";

config.autoAddCss = false;

const SocialCircleLink = ({
  href,
  title,
  icon,
}: {
  href: string;
  title: string;
  icon: IconDefinition;
}) => (
  <div className="inline-block mx-4">
    <a
      className="rounded-full h-8 w-8 flex items-center justify-center bg-gray-800 text-gray-50"
      href={href}
      title={title}
    >
      <FontAwesomeIcon icon={icon} />
    </a>
  </div>
);

const Facebook = () => (
  <SocialCircleLink
    href="https://www.facebook.com/ijshockij"
    title="facebook"
    icon={faFacebookF}
  />
);

const Instagram = () => (
  <SocialCircleLink
    href="https://www.instagram.com/ijshockij"
    title="instagram"
    icon={faInstagram}
  />
);

const Twitter = () => (
  <SocialCircleLink
    href="https://twitter.com/ijshockij"
    title="twitter"
    icon={faTwitter}
  />
);

const SponsorLink = ({
  href,
  title,
  logo,
}: {
  href: string;
  title: string;
  logo: string;
}) => (
  <a className="mb-8 block" href={href} title={title}>
    <img src={logo} alt={title} />
  </a>
);

const APlus = () => (
  <SponsorLink
    href="https://www.aplusramen.be/"
    title="A-Plus Ramen"
    logo="/a-plus.png"
  />
);

const ABFK = () => (
  <SponsorLink
    href="https://abfk.be/"
    title="Boekhoudkantoor ABFK"
    logo="/abfk.png"
  />
);

const GKP = () => (
  <SponsorLink
    href="https://www.gkp.be/"
    title="GKP Zonnepanelen, dak- en elektriciteitswerken"
    logo="/gkp.png"
  />
);

const KapermolenSportbar = () => (
  <SponsorLink
    href="https://www.facebook.com/Sportbar-Kapermolen-100417485152896/"
    title="Sportbar Kapermolen"
    logo="/kapermolen-sportbar.png"
  />
);

const Momentum = () => (
  <SponsorLink
    href="https://momentumvastgoed.be/"
    title="Momentum Vastgoed Hasselt-Genk"
    logo="/momentum.png"
  />
);

const VinosRios = () => (
  <SponsorLink
    href="https://vinosrios.com/"
    title="Vinos Rios Spaanse kwaliteitswijnen"
    logo="/vinos-rios.png"
  />
);

const Home = () => (
  <div>
    <Head>
      <title>ijshockij</title>
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <style>{dom.css()}</style>
    </Head>

    <main className="bg-gray-200 text-gray-900">
      <header className="text-center py-8">
        <h1 className="text-3xl">ijshockij</h1>
        <div className="mt-4 -mb-12">
          <Facebook />
          <Instagram />
          <Twitter />
        </div>
      </header>
      <section className="bg-gray-50 py-8">
        <img src="/bas.png" alt="Coach Bas" className="" />
        <div className="m-2">
          <h2 className="text-xl">Wij leren jou ijshockey spelen!</h2>
          <p>
            Iedereen kan ijshockey spelen en wij staan klaar om jou hiermee te
            helpen.
          </p>
        </div>
      </section>
      <section className="py-8 px-4">
        <div>
          <div className="bg-gray-800 flex items-center justify-between p-4 text-gray-50 rounded-t">
            <h3 className="uppercase">paaskamp</h3>
            <FontAwesomeIcon icon={faCalendarCheck} />
          </div>
          <div className="p-4 bg-gray-50 rounded-b">
            <ul>
              <li>09 april 13:00 - 17:30</li>
              <li>10 april 14:00 - 18:30</li>
              <li>11 april 14:00 - 18:30</li>
            </ul>
            <div>
              <button className="mt-4 rounded bg-gray-800 text-gray-50 px-4 py-2 w-full" type="button" disabled>
                Volzet
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="py-8 px-4">
        <APlus />
        <ABFK />
        <GKP />
        <KapermolenSportbar />
        <Momentum />
        <VinosRios />
      </section>
      <footer className="pt-8 pb-4 bg-gray-800 text-gray-50 text-center">
        <div className="">
          <Facebook />
          <Instagram />
          <Twitter />
        </div>
        <div className="mt-4 text-sm">© 2021 - ijshockij</div>
      </footer>
    </main>
  </div>
);

export default Home;
