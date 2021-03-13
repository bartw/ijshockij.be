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
        <div className="text-2xl">
          <a href="https://www.facebook.com/ijshockij">
            <FontAwesomeIcon icon={faFacebook} className="hover:text-gray-300" />
          </a>
          <a href="https://www.instagram.com/ijshockij">
            <FontAwesomeIcon icon={faInstagram} className="hover:text-gray-300 ml-4" />
          </a>
          <a href="https://twitter.com/ijshockij">
            <FontAwesomeIcon icon={faTwitter} className="hover:text-gray-300 ml-4" />
          </a>
        </div>
        <div className="mt-4 text-sm">© 2021 - ijshockij</div>
      </div>
    </Container>
  </footer>
);
