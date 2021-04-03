import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck } from "@fortawesome/free-regular-svg-icons";
import { Container } from "./container";

export const Events = () => (
  <section className="py-8 px-4">
    <Container>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 auto-rows-auto gap-8">
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
              <button
                className="mt-4 rounded bg-gray-800 text-gray-50 px-4 py-2 w-full"
                type="button"
                disabled
              >
                Volzet
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </section>
);
