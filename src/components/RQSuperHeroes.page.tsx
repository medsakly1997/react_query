import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
const RQSuperHeroes = () => {
  const fetchSuperComments = () => {
    return axios.get("http://localhost:5000/superheroes");
  };
  const { data, isLoading, isError } = useQuery("comments", fetchSuperComments);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  console.log(data);
  return (
    <div>
      <h2>Super Heroes</h2>
      {data?.data.map((comment: any) => {
        return <div key={comment.id}>{comment.text}</div>;
      })}
    </div>
  );
};

export default RQSuperHeroes;
