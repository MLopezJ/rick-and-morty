// type Action = {action: (action: number) => number};
type Action = {action: (action: number) => void}
const Pagination = ({ action }: Action) => {
  return (
    <div>
      <button onClick={() => action(-1)}>Prev</button>
      <button onClick={() => action(+1)}>Next</button>
    </div>
  );
};

export default Pagination;
