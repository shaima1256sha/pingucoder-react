import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement(
//   "h1",
//   { id: "headings", xyz: "bachboucha" },
//   "hello from js"
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

const parent = React.createElement(
  "div",
  { id: "parent" },
  [
    React.createElement("div", { id: "child" }, [
      React.createElement("h1", {}, "learn parcel"),
      React.createElement("h2", {}, "i am h2 tag"),
    ]),
  ],
  [
    React.createElement("div", { id: "child2" }, [
      React.createElement("h1", {}, "i am h1 tag"),
      React.createElement("h2", {}, "i am h2 tag"),
    ]),
  ]
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
console.log(parent);
