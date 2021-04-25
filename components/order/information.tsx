import { faFileAlt } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../button";
import { Card, CardHeader } from "../card";
import { FormElement } from "../form-element";
import { Input } from "../input";

type Props = {
  name: string;
  email: string;
  newsletter: boolean;
  onChangeName: (name: string) => void;
  onChangeEmail: (email: string) => void;
  onChangeNewsletter: (newsletter: boolean) => void;
};

export const Information = ({
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
      <Button type="submit">Bestellen</Button>
    </div>
  </Card>
);
