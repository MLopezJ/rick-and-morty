import { useCharacters } from "../hooks/useCharacters";
import Loading from "./utils/Loading";
import Error from "./utils/Error";

function Characters() {
  const { charaters, loading, error } = useCharacters();

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error message={error.message} />;
  }

  return (
    <ul>
      {charaters?.map((character) => (
        <li key={character.id}>
          <div>
            <p>{character.name}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Characters;
