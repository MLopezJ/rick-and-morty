import {
  useCharacters,
  type Character as CharacterType,
} from "../hooks/useCharacters";
import "./utils/Card.scss";
import { useParams } from "react-router-dom";
import Loading from "./utils/Loading";
import Card from "./utils/Card";
import { useEffect, useState } from "react";

const Character = () => {
  let { id } = useParams();
  const { charaters } = useCharacters().state;

  const [state, setState] = useState<{ character: undefined | CharacterType }>({
    character: undefined,
  });

  useEffect(() => {
    const character = charaters.find(
      (character) => character.id === Number(id)
    );
    if (character !== undefined) setState({ character });
  }, [charaters, id]);

  if (state.character === undefined) return <Loading />;

  return (
    <>
      <Card key={state.character.id} {...state.character} />
      <div>
        <h3>Name</h3>:<p>{`${state.character.name}`}</p>
        <h3>Status</h3>:<p>{`${state.character.status}`}</p>
        <h3>Specie</h3>:<p>{`${state.character.species}`}</p>
        <h3>Type</h3>:<p>{`${state.character.type}`}</p>
        <h3>Gender</h3>:<p>{`${state.character.gender}`}</p>
        <h3>Origin</h3>:<p>{`${state.character.origin.name}`}</p>
        <h3>Location</h3>:<p>{`${state.character.location.name}`}</p>
      </div>
    </>
  );
};

export default Character;
