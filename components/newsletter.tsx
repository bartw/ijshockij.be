import { useState } from "react";
import { Button } from "./button";
import { TextInput } from "./text-input";

export const Newsletter = () => {
  const [email, setEmail] = useState<string>("");

  return (
    <div className="bg-yellow-500 text-yellow-50 mx-4 sm:mx-0 max-w-xs p-4 rounded">
      <p>Blijf op de hoogte met onze nieuwsbrief:</p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="mt-2">
          <TextInput
            type="email"
            placeholder="hockey@player.nhl"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="mt-2">
          <Button type="submit">Abonneer</Button>
        </div>
      </form>
    </div>
  );
};
