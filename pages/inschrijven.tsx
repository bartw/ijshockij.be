import { faCalendarCheck } from "@fortawesome/free-regular-svg-icons";
import Image from "next/image";
import { Card, CardHeader, Container, Hero, Layout } from "../components";

const Inschrijven = () => {
  return (
    <Layout>
      <Hero>
        <Image
          src="/ijshockij.png"
          alt="ijshockij logo"
          width={500}
          height={500}
        />
        <>Het Xmas off ice skill camp komt eraan!</>
        <p>Schrijf je kind nu in want de plaatsen zijn beperkt.</p>
      </Hero>
      <section className="py-8 px-4">
        <Container>
          <Card>
            <CardHeader icon={faCalendarCheck}>
              xmas off ice skill camp
            </CardHeader>
            <div className="flex justify-center">
              <Image
                src="/xmas.png"
                alt="xmas off ice skill camp"
                width={640}
                height={777}
              />
            </div>
            <div>
              <p>
                Schrijf je kind in door €60 over te schrijven naar BE23 3350
                3231 0443.
              </p>
              <p>Vergeet niet de naam van je kind te vermelden.</p>
            </div>
          </Card>
        </Container>
      </section>
    </Layout>
  );
};

export default Inschrijven;
