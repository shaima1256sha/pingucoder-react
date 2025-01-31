const heading = React.createElement(
  "h1",
  { id: "headings", xyz: "khnifs" },
  "hello from js"
);
console.log(heading); //return object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

const parent = React.createElement(
  "div",
  { id: "parent" },[
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "i am h1 tag"),
    React.createElement("h2", {}, "i am h2 tag"),
  ])],
  [
    React.createElement("div", { id: "child" }, [
      React.createElement("h1", {}, "i am h1 tag"),
      React.createElement("h2", {}, "i am h2 tag"),
    ])]
);

const secpart = ReactDOM.createRoot(document.getElementById("secpart"));

secpart.render(parent);
console.log(parent);
