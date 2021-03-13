import { Container } from "./container";
import { Newsletter } from "./newsletter";

export const Footer = () => (
  <footer className="mt-16 bg-gray-900 text-white">
    <Container>
      <div className="-mt-8">
          <Newsletter />
      </div>
      <div className="my-8 text-center text-sm">© 2021 - ijshockij</div>
    </Container>
  </footer>
);
