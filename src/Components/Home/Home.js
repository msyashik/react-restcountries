import React, { useState, useEffect } from "react";
import Country from "../Countries/Country";

const Home = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  return (
    <div>
      {countries.map((countryInfo) => (
        <Country key={countryInfo.name} countryInfo={countryInfo}></Country>
      ))}
    </div>
  );
};

export default Home;
