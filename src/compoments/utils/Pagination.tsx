import "./Pagination.scss";

type Action = {action: (action: number) => void}
const Pagination = ({ action }: Action) => {
  return (
    <div className="pag-container">
      <button className="prev" onClick={() => action(-1)}>Prev</button>
      <button className="next" onClick={() => action(+1)}>Next</button>
    </div>
  );
};

export default Pagination;
