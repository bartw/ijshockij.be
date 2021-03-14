import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import { Container } from "./container";
import { Newsletter } from "./newsletter";

export const Footer = () => (
  <footer className="mt-32 bg-gray-900 text-gray-50">
    <Container>
      <div className="-mt-16">
        <Newsletter />
      </div>
      <div className="my-8 text-center">
        <div className="text-3xl">
          <a
            href="https://www.facebook.com/ijshockij"
            className="hover:text-gray-300"
            title="facebook"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a
            href="https://www.instagram.com/ijshockij"
            className="hover:text-gray-300 ml-6"
            title="instagram"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href="https://twitter.com/ijshockij"
            className="hover:text-gray-300 ml-6"
            title="twitter"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>
        <div className="mt-4 text-sm">© 2021 - ijshockij</div>
      </div>
    </Container>
  </footer>
);
