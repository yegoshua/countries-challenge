import { useState, useEffect } from "react";
import axios from "axios";
import List from "../components/List";
import Card from "../components/Card";
import { Switch, Route } from "react-router-dom";
import Controls from "../components/Controls";
import { ALL_COUNTRIES } from "../config";

export const Homepage = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    if (!countries.length)
      axios.get(ALL_COUNTRIES).then(({ data }) => setCountries(data));
  }, []);

  return (
    <>
      <Controls />
      <List>
        {countries.map((c) => {
          const countryInfo = {
            img: c.flags.png,
            name: c.name,
            info: [
              {
                title: "Population",
                description: c.population.toLocaleString(),
              },
              {
                title: "Region",
                description: c.region,
              },
              {
                title: "Capital",
                description: c.capital,
              },
            ],
          };
          return <Card key={c.name} {...countryInfo}></Card>;
        })}
      </List>
    </>
  );
};
