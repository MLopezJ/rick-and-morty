import { useCharacters } from "../hooks/useCharacters";
import Loading from "./utils/Loading";
import Error from "./utils/Error";
import Card from "./utils/Card";
import "./Characters.scss";

function Characters() {
  const { charaters, loading, error } = useCharacters();

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error message={error.message} />;
  }

  return (
    <div className="Characters">
      {charaters?.map((character) => (
        <Card key={character.id} {...character} />
      ))}
    </div>
  );
}

export default Characters;
