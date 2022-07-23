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
        `https://16b9534b-1b6f-4e0a-bd63-b966d5d571f7.mock.pstmn.io/list`
      );
      setMembers(response.data);
      //   setLoading(false);
    };
    fetchData();
  }, []);
  //   console.log(members);
  //   console.log(memId);
  //   console.log("members");
  //   console.log(members);

  //   const a = useParams();
  //   const memId = a.memId;
  //   const detail = members.filter((member) => member.memId === { memId });
  //   console.log("detail");
  //   console.log(detail);
  let a = useParams();
  console.log(a);
  const name = a.name;
  const mem = members.filter((member) => member.name === name)[0];

  return (
    <>
      {/* <div>about {memId}</div>
      <div>{name}</div>
      <div>{detail.nickname}</div>
      <div>{detail.description}</div> */}
      <div>
        key={mem.memId}
        name={mem.name}
        nickname={mem.nickname}
        description={mem.description}
        role={mem.role}
      </div>
    </>
  );
};

export default Card;
