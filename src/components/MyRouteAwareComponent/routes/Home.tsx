import type { FunctionComponent } from "preact";
import type { RoutableProps } from "preact-iso";

type Props = RoutableProps & { foo: string };

export const Home: FunctionComponent<Props> = ({ foo }) => (
  <main>
    <h1>Home</h1>
    <h2>{foo}</h2>
    <ol>
      <li>
        <a href="/app/profiles">Profiles</a>
      </li>
      <li>
        <a href="/app/whatever">Whatever</a>
      </li>
      <li>
        <a href="/">External</a>
      </li>
    </ol>
  </main>
);
