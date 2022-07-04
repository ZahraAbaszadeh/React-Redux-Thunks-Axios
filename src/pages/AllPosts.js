import React, { useState, useEffect } from "react";
import axios from "axios";
const AllPosts = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    axios({
      url: "https://jsonplaceholder.typicode.com/posts",
    })
      .then((response) => {
        setList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setList]);

  return (
    <div>
      {list.map((item) => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <p>{item.body}</p>
        </div>
      ))}
    </div>
  );
};

export default AllPosts;
