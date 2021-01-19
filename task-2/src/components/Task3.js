import React, { useEffect, useState } from "react";
import fetch from "node-fetch";

const Task3 = () => {
  const [search, setSearch] = useState("");
  const [gif, setGif] = useState("#");

  const handelData = (data) => {
    setGif(data.data[0].images.original.url);
  };

  useEffect(() => {
    const fetchAportControler = new AbortController();
    fetch(
      `https://api.giphy.com/v1/gifs/search?&q=${search}&limit=12&api_key=3mIxmBZUIIPyb8R69gtxaW8Hsh74dFKV`,
      { signal: fetchAportControler.signal }
    )
      .then((res) => res.json())
      .then(handelData)
      .catch((e) => {
        if (e.name === "AbortError") {
          console.log("requist is no more");
        } else {
          console.log(e.message);
        }
      });
    return () => {
      fetchAportControler.abort();
    };
  });

  return (
    <>
      <br></br>
      <input
        type="text"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        placeholder="enter whatever you want"
      ></input>
      <img alt="GHK" src={gif}></img>
    </>
  );
};

export default Task3;
