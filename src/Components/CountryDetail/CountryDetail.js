import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CountryDetail = () => {
  const { name } = useParams();
  const [country, setCountry] = useState([]);
  useEffect(() => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCountry(data[0]));
  }, [name]);
  const countryDetailStyle = {
    border: "1px solid goldenrod",
    margin: "50px",
    padding: "50px",
    borderRadius: "50px",
  };
  return (
    <div style={countryDetailStyle}>
      <h1>Welcome!</h1>
      <p>Name: {country.name}</p>
      <p>Capital: {country.capital}</p>
      <p>Population: {country.population}</p>
      <p>Region: {country.region}</p>
    </div>
  );
};

export default CountryDetail;
