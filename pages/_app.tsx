import { config } from "@fortawesome/fontawesome-svg-core";
import type { AppProps } from "next/app";
import "../styles/globals.css";

config.autoAddCss = false;

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default App;
