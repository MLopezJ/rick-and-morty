import { useCharacters } from "../hooks/useCharacters";
import Loading from "./utils/Loading";
import Error from "./utils/Error";
import Card from "./utils/Card";

function Characters() {
  const { charaters, loading, error } = useCharacters();

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error message={error.message} />;
  }

  return (
    <>
      {charaters?.map((character) => (
        <Card key={character.id} {...character} />
      ))}
    </>
  );
}

export default Characters;
