import { Container } from "./container";

export const Hero = () => (
  <section className="bg-gray-50 pt-8 pb-8 md:pb-0">
    <Container>
      <div className="md:flex md:flex-row-reverse md:items-center">
        <div>
          <img src="/bas.png" alt="Coach Bas" />
        </div>
        <div className="mx-4 mt-4 md:mt-0">
          <h2 className="text-xl">Wij leren jou ijshockey spelen!</h2>
          <p>
            Iedereen kan ijshockey spelen en wij staan klaar om jou hiermee te
            helpen.
          </p>
        </div>
      </div>
    </Container>
  </section>
);
