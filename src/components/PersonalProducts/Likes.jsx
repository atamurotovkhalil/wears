import { useState } from "react";
import React from "react";
import { BiSolidLike } from "react-icons/bi";

function Likes() {
  let [likes, setLikes] = useState(0);
  function countLikes() {
    setLikes(++likes);
  }

  return (
    <div className="flex p-1">
      <BiSolidLike onClick={countLikes} className="w-5 h-5"></BiSolidLike>
      <span>{likes}</span>
    </div>
  );
}

export default Likes;
