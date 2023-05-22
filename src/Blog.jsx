import React, { useContext } from "react";
import { Data } from "./Context";

export default function Blog() {
  let { text } = useContext(Data);

  return (
    <div>
      <h1>blog</h1>
      <h2>{text}</h2>
    </div>
  );
}
