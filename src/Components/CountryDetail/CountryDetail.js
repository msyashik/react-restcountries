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
  return (
    <div style={{ width: "50%", margin: "auto 30%" }}>
      <div>
        <h1 style={{ textAlign: "center", color: "goldenrod" }}>
          Welcome to {country.name}!
        </h1>
        <img className="w-100 h-100 mt-2" src={country.flag} alt="" />
        <div className="mt-2" style={{ textAlign: "center" }}>
          <h3>Name: {country.name}</h3>
          <h5>Capital: {country.capital}</h5>
          <h6>Population: {country.population}</h6>
          <h6>Region: {country.region}</h6>
        </div>
      </div>
    </div>
  );
};

export default CountryDetail;
