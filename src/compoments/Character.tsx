import { useCharacter } from "../hooks/useCharacter";
import "./utils/Card.scss";
import Loading from "./utils/Loading";

import "./Character.scss";

const Character = () => {
  const { character } = useCharacter();

  if (character === undefined) return <Loading />;

  return (
    <div className="container">
      <div>
        <h1 className="text-center">{character.name}</h1>

        <div className="img-container">
          <img className="img-fluid" src={character.image} alt="" />
        </div>

        <div>
          <div className="space-between-elements">
            <span className="fw-bold">status : </span>
            {character.status}
          </div>
          <div className="space-between-elements">
            <span className="fw-bold">Gender : </span>
            {character.gender}
          </div>
          <div className="space-between-elements">
            <span className="fw-bold">Location: </span>
            {character.location?.name}
          </div>
          <div className="space-between-elements">
            <span className="fw-bold">Origin: </span>
            {character.origin?.name}
          </div>
          <div className="space-between-elements">
            <span className="fw-bold">Species: </span>
            {character.species}
          </div>
        </div>
        <div>
          <button className="character-return space-between-elements">
            Return
          </button>
        </div>
      </div>
    </div>
  );
};

export default Character;
