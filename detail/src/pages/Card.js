import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Card = () => {
  const [members, setMembers] = useState([]);
  //   const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      //   setLoading(true);
      const response = await axios.get(
        "https://16b9534b-1b6f-4e0a-bd63-b966d5d571f7.mock.pstmn.io/list"
      );
      setMembers(response.data);
      //   setLoading(false);
    };
    fetchData();
  }, []);

  let a = useParams();
  console.log(a);
  const name = a.name;
  const mem = members.filter((member) => member.name === name)[0];
  let { memId } = useParams();
  return (
    <>
      {/* <p>key={memId}</p>
      <p>name={props.name}</p>
      <p>nickname={props.nickname}</p>
      <p>description={props.description}</p>
      <p>role={props.role}</p> */}
      <p>key={memId}</p>
      {/* <p>name={mem.name}</p>
      <p>nickname={mem.nickname}</p>
      <p>description={mem.description}</p>
      <p>role={mem.role}</p> */}
    </>
  );
};

export default Card;
