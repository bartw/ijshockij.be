import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck } from "@fortawesome/free-regular-svg-icons";
import {
  faTshirt,
  faEnvelopeOpenText,
} from "@fortawesome/free-solid-svg-icons";
import {
  FormEvent,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { Container } from "./container";

const IconListItem = ({
  icon,
  children,
}: {
  icon: IconDefinition;
  children: ReactNode;
}) => (
  <li className="mt-1 flex items-baseline">
    <FontAwesomeIcon icon={icon} fixedWidth />
    <span className="ml-2">{children}</span>
  </li>
);

export const Newsletter = () => {
  const [email, setEmail] = useState<string>("");
  const [isPending, setIsPending] = useState<boolean>(false);
  const isMounted = useRef(true);

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  const subscribe = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (isPending) return;

      setIsPending(true);

      try {
        await fetch("api/subscribe", {
          method: "POST",
          body: JSON.stringify({ email }),
        });
        setEmail("");
      } catch (error) {
      } finally {
        if (isMounted.current) {
          setIsPending(false);
        }
      }
    },
    [email, isPending]
  );

  return (
    <section className="bg-gray-50 py-8 px-4">
      <Container>
        <p>
          Schrijf je in voor onze nieuwsbrief en blijf op de hoogte van onze:
        </p>
        <ul className="mt-2">
          <IconListItem icon={faCalendarCheck}>kampen en events</IconListItem>
          <IconListItem icon={faTshirt}>merchandise</IconListItem>
        </ul>
        <form className="mt-4" onSubmit={subscribe}>
          <div className="flex">
            <input
              className="flex-1 md:flex-none border-l border-t border-b border-gray-800 rounded-l p-2 text-gray-900"
              type="email"
              placeholder="player@hockey.ice"
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <button
              type="submit"
              disabled={isPending}
              className="border-r border-t border-b border-gray-800 hover:border-gray-700 rounded-r bg-gray-800 hover:bg-gray-700 text-gray-50 px-4 py-2"
              title="Inschrijven"
            >
              <FontAwesomeIcon icon={faEnvelopeOpenText} />
            </button>
          </div>
        </form>
      </Container>
    </section>
  );
};
