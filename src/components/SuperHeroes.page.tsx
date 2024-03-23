import axios from "axios";
import React, { useEffect, useState } from "react";

const SuperHeroes = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/posts").then((res) => {
      setData(res.data);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <h2>Super Heroes</h2>
      {data.map((post: any) => {
        return <div key={post.id}>{post.title}</div>;
      })}
    </div>
  );
};

export default SuperHeroes;
