import { useCharacters } from "../hooks/useCharacters";
import Loading from "./utils/Loading";
import Error from "./utils/Error";
import Card from "./utils/Card";
import "./Characters.scss";
import Pagination from "./utils/Pagination";

function Characters() {
  const { state, handlePagination } = useCharacters();
  const { charaters, loading, error, pagination } = state;

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error message={error.message} />;
  }

  return (
    <>
      <div className="Characters">
        {charaters?.map((character) => (
          <Card
            key={character.id}
            character={character}
            pagination={pagination}
          />
        ))}
      </div>
      <div>
        <Pagination action={handlePagination}></Pagination>
      </div>
    </>
  );
}

export default Characters;
