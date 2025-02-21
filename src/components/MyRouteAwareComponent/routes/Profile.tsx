export type Props = {
  id?: string;
};

export const Profile = ({ id }: Props) => (
  <main>
    <h1>Profile {id}</h1>
    <ol>
      <li>
        <a href="/app/profiles">Profiles</a>
      </li>
      <li>
        <a href="/app">Home</a>
      </li>
    </ol>
  </main>
);
