import { useCharacter } from "../hooks/useCharacter";
import "./utils/Card.scss";
import Loading from "./utils/Loading";
import Card from "./utils/Card";

const Character = () => {
  const { character } = useCharacter();

  if (character === undefined) return <Loading />;

  return (
    <>
      <Card key={character.id} character={character} />
      <div>
        <h3>Name</h3>:<p>{`${character.name}`}</p>
        <h3>Status</h3>:<p>{`${character.status}`}</p>
        <h3>Specie</h3>:<p>{`${character.species}`}</p>
        <h3>Type</h3>:<p>{`${character.type}`}</p>
        <h3>Gender</h3>:<p>{`${character.gender}`}</p>
        <h3>Origin</h3>:<p>{`${character.origin.name}`}</p>
        <h3>Location</h3>:<p>{`${character.location.name}`}</p>
      </div>
    </>
  );
};

export default Character;
