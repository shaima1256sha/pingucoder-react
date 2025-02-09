import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement(
//   "h1",
//   { id: "headings", xyz: "bachboucha" },
//   "hello from js"
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   [
//     React.createElement("div", { id: "child" }, [
//       React.createElement("h1", {}, "learn parcel"),
//       React.createElement("h2", {}, "i am h2 tag"),
//     ]),
//   ],
//   [
//     React.createElement("div", { id: "child2" }, [
//       React.createElement("h1", {}, "i am h1 tag"),
//       React.createElement("h2", {}, "i am h2 tag"),
//     ]),
//   ]
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent);
// console.log(parent);

// ~ React.createElement => objet => HTML element (render)

// const headingg = React.createElement("h1", { id: "head" }, "pingucoder React");
// console.log(heading);

// & JSX it not HTML

// const heading = <h1 id="headh">pingucoder using jsx</h1>;

// ^ React functional component
const Title = () => <h1 className="titre"> slm ena chaima</h1>;

const number = 1250;
const element = <span> <br />React element </span>;

const RasTag = () => (
  <div id="container">
    {number}
    {element}
    <Title />
    <Title></Title>
    {Title()}
    <h1> learn react</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RasTag />);
