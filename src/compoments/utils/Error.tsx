import React from "react";

type ErrorProps = {
  message: string;
};

const Error: React.FC<ErrorProps> = ({ message }) => {
  return (
    <div>
      <p>Error!</p>
      <p>{message}</p>
    </div>
  );
};

export default Error;
