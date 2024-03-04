import "./Card.scss";
import { Character, Pagination } from "../../hooks/useCharacters";
import { useNavigate } from "react-router-dom";

const Card = ({ character }: { character: Character }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/characters/${character.id}`)}
      className="character"
    >
      <img src={character.image} alt="" className="character__thumbnail" />
      <div className="character__name">{character.name}</div>
    </div>
  );
};

export default Card;
