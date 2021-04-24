import { config, dom } from "@fortawesome/fontawesome-svg-core";
import Head from "next/head";
import { ReactNode } from "react";
import { Footer, Header, Sponsors } from "../components";

config.autoAddCss = false;

export const Layout = ({ children }: { children: ReactNode | ReactNode[] }) => (
  <div>
    <Head>
      <title>ijshockij</title>
      <meta name="description" content="Wij leren jou ijshockey spelen!" />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <style>{dom.css()}</style>
    </Head>

    <main className="bg-gray-200 text-gray-900">
      <Header />
      {children}
      <Sponsors />
      <Footer />
    </main>
  </div>
);
