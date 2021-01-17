import React from "react";
interface IProp {
  message: string;
}
function List({ message }: IProp) {
  return <li>{message}</li>;
}

export default List;
