import type { FunctionComponent } from "preact";
import type { RoutableProps } from "preact-iso";

export const NotFound: FunctionComponent<RoutableProps> = () => (
  <main>
    <h1>NotFound</h1>
    <a href="/app">Back</a>
  </main>
);
