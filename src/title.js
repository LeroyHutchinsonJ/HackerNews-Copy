import React from "react";
import ReactDOM from "react-dom";

var Title = () => {
  return (
    <ul className="titleBox">
      <li className="fab fa-hacker-news" />
      <li className="listInfo">
        <b>HackerNews</b>
      </li>
      <li className="listInfo">new|</li>
      <li className="listInfo">threads|</li>
      <li className="listInfo">comments|</li>
      <li className="listInfo">show|</li>
      <li className="listInfo">ask|</li>
      <li className="listInfo">jobs|</li>
      <li className="listInfo">submit</li>
    </ul>
  );
};

export default Title;
