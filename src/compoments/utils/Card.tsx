import "./Card.scss";
import { Character, Pagination } from "../../hooks/useCharacters";
import { useNavigate } from "react-router-dom";

const Card = ({
  character,
  pagination,
}: {
  character: Character;
  pagination: Pagination;
}) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() =>
        navigate(`/characters/${character.id}`, {
          state: { pag: pagination.current },
        })
      }
      className="character"
    >
      <img src={character.image} alt="" className="character__thumbnail" />
      <div className="character__name">{character.name}</div>
    </div>
  );
};

export default Card;
