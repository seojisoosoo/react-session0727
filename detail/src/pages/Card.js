import React from "react";
import { useParams } from "react-router-dom";

const Card = (props) => {
  let { memId } = useParams();
  return (
    <>
      <h1>{props[memId].memId}</h1>
      <p>{props[memId].nickname}</p>
      <p>{props[memId].nickname}</p>
      <p>{props[memId].nickname}</p>
      <p>{props[memId].nickname}</p>
    </>
  );
};

export default Card;
