import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import NewsBox from "./news-box.js";

function App() {
  return (
    <div className="App">
      <NewsBox newsArray={NewsArray} />
    </div>
  );
}

var NewsArray = [
  {
    id: 1,
    articleName: "Why I'm Suing the US Government",
    websiteLink: "bunniestudios.com",
    authorNameWithPoints: "1346 points by ivank",
    flag: "flag",
    hide: "hide",
    comments: " 257 comments",
    instapaper: "instapaper",
    savetopocket: "savetopocket",
    time: "3/4/2019"
  },

  {
    id: 2,
    articleName: "ZenziZenziZenzic",
    websiteLink: "wikipedia.org",
    authorNameWithPoints: "140 points by vinchuco",
    flag: "flag",
    hide: "hide",
    comments: " 40 comments",
    instapaper: "instapaper",
    savetopocket: "savetopocket",
    time: "2/4/2019"
  }
];
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
