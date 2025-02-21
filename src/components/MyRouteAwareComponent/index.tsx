import type { FunctionComponent } from "preact";
import {
  ErrorBoundary,
  lazy,
  LocationProvider,
  Route,
  Router,
} from "preact-iso";

// Synchronous
import { Home } from "./routes/Home.tsx";
import { Profiles } from "./routes/Profiles.tsx";
import { locationStub } from "preact-iso/prerender";

// Asynchronous (throws a promise)
import type { Props as ProfileProps } from "./routes/Profile.tsx";
const Profile = lazy(() =>
  import("./routes/Profile.tsx").then((cmp) => cmp.Profile)
);
const NotFound = lazy(() =>
  import("./routes/_404.tsx").then((cmp) => cmp.NotFound)
);

type AppProps = { path: string; foo: string };

export const MyRouteAwareComponent: FunctionComponent<AppProps> = (
  { path, foo },
) => {
  locationStub(path);
  return (
    <LocationProvider scope="/app">
      <ErrorBoundary>
        <Router>
          <Home path="/app" foo={foo} />
          {/* Alternative dedicated route component for better TS support */}
          <Route path="/app/profiles" component={Profiles} />
          <Route<ProfileProps>
            path="/app/profiles/:id"
            component={({ id }) => <Profile id={id} />}
          />
          {/* `default` prop indicates a fallback route. Useful for 404 pages */}
          <NotFound default />
        </Router>
      </ErrorBoundary>
    </LocationProvider>
  );
};
