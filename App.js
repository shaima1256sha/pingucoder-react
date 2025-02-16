import React from "react";
import ReactDOM from "react-dom/client";
import data from "./ResData.json";

/**
 * Header
 *    -Logo
 *    -NavItems
 *
 * Body
 *    -Search
 *    -RestaurantContainers:
 *        -Restaurant Cards
 *            -Img
 *            -Name of restaurant, Star rating, Cuisine, Delevery time
 * Footer
 *    -Copyright
 *    -Links
 *    -Adress
 *    -Contact
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-Container">
        <img
          className="logo"
          src="https://img.freepik.com/free-vector/burger-cheese-with-fire-cartoon-vector-icon-illustration-food-object-icon-concept-isolated-premium_138676-5539.jpg?w=826&t=st=1695148160~exp=1695148760~hmac=15fbe29d7fb2f694e05ac95449f779d2228e6c1f46233dfd51c55f3bf5db4bdc"
          alt="logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const styleCard = {
  backgroundColor: "#f0f0f0",
};

// ! Dynamic Data with JSON

const RestaurantCard = (props) => {
  const { item } = props;
  const { name, avgRating, cuisines, areaName, cloudinaryImageId } = item;
  const imgSrc = `https://glovo.dhmedia.io/image/stores-glovo/stores/${cloudinaryImageId}`;
  return (
    <div className="res-card">
      <img src={imgSrc} alt="res-logo" className="res-logo" />
      <h3 className="res-name">{name}</h3>
      <h4 className="res-rating">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Star_icon_stylized.svg/1077px-Star_icon_stylized.svg.png"
          alt="star"
          className="res-star"
        />
        {avgRating}
      </h4>
      <div className="res-items">{cuisines.join(" ,")}</div>
      <div className="res-location">{areaName}</div>
    </div>
  );
};
const Body = () => {
  const resData = data?.resData;
  return (
    <div className="body">
      <div className="res-container">
        {resData.map((item) => (
          <RestaurantCard item={item.info} key={item.info.id} />
        ))}
      </div>
    </div>
  );
};

const Footer = () => {
  return <div className="footer"></div>;
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

//~Destructuring
//~ Array destructuring

// const numbers = [1, 2, 3, 4, 5];
// const [first, second, third] = numbers;
// console.log(first, third); //=> 1,3

//& object destructuring

// const person = {
//   name: "chaima",
//   age: 21,
// };
// const { name } = person;
// console.log(name);

// ^changement des variables a travers destructuring

// const { name: userName, age: userAge } = person;
// console.log(userName);
