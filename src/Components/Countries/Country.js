import React from "react";
import { Link } from "react-router-dom";

const Country = (props) => {
  const countryInfo = props.countryInfo;
  const { name } = countryInfo;
  const countryInfoStyle = {
    border: "1px solid goldenrod",
    margin: "50px",
    padding: "50px",
    borderRadius: "50px",
  };

  return (
    <div style={countryInfoStyle}>
      <h1>{name}</h1>
      <p>
        <Link to={"/country/" + name}>More Info</Link>
      </p>
    </div>
  );
};

export default Country;
