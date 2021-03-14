import { FormEvent, useCallback, useEffect, useRef, useState } from "react";
import { Button } from "./button";
import { TextInput } from "./text-input";

const NEWSLETTER_EMAIL_ID = "NEWSLETTER_EMAIL_ID";

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
      console.log("subsribe", email, isPending);
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
    <div className="bg-yellow-600 text-yellow-50 max-w-xs p-8 rounded">
      <p className="font-semibold">Schrijf je in voor onze nieuwsbrief</p>
      <form className="mt-4" onSubmit={subscribe}>
        <div>
          <label htmlFor={NEWSLETTER_EMAIL_ID}>Email:</label>
          <TextInput
            id={NEWSLETTER_EMAIL_ID}
            type="email"
            placeholder="player@hockey.ice"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="mt-2">
          <Button type="submit" disabled={isPending}>
            Inschrijven
          </Button>
        </div>
      </form>
    </div>
  );
};
