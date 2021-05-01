import { faFileAlt } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../button";
import { Card, CardHeader } from "../card";
import { FormElement } from "../form-element";
import { Input } from "../input";

type Props = {
  state: "INITIAL" | "PENDING" | "ERROR" | "SUCCESS";
  name: string;
  email: string;
  newsletter: boolean;
  onChangeName: (name: string) => void;
  onChangeEmail: (email: string) => void;
  onChangeNewsletter: (newsletter: boolean) => void;
};

export const Information = ({
  state,
  name,
  email,
  newsletter,
  onChangeName,
  onChangeEmail,
  onChangeNewsletter,
}: Props) => (
  <Card>
    <CardHeader icon={faFileAlt}>gegevens</CardHeader>
    <div>
      <p>
        Wij contacteren jou via email als je de bestelling geplaatst hebt om de
        betaling en afhaling te regelen.
      </p>
      <p className="mt-2">
        Een bestelling is pas definitief nadat wij de betaling hebben ontvangen.
      </p>
      <FormElement label="Naam:">
        <Input
          type="text"
          placeholder="hockey player"
          required
          value={name}
          onChange={(e) => onChangeName(e.target.value)}
        />
      </FormElement>
      <FormElement label="Email:">
        <Input
          type="email"
          placeholder="player@hockey.ice"
          required
          value={email}
          onChange={(e) => onChangeEmail(e.target.value)}
        />
      </FormElement>
      <div className="mt-4">
        <label>
          <input
            type="checkbox"
            checked={newsletter}
            onChange={(e) => onChangeNewsletter(e.target.checked)}
          />
          <span className="ml-2">Inschrijven op onze nieuwsbrief?</span>
        </label>
      </div>
    </div>
    <div className="text-right">
      <Button type="submit" disabled={state === "PENDING"}>
        Bestellen
      </Button>
      {state === "SUCCESS" && (
        <div role="alert" className="mt-2 text-sm text-green-700">
          <p>Bedankt voor je bestelling!</p>
        </div>
      )}
      {state === "ERROR" && (
        <div role="alert" className="mt-2 text-sm text-red-700">
          <p>Oei, er is iets misgegaan.</p>
          <p>Probeer je het nog een keer?</p>
        </div>
      )}
    </div>
  </Card>
);
