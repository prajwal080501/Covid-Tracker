import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/Header/Header";

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("worldwide");
  useEffect(() => {
    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries") //fetching data from the api
        .then((response) => response.json()) //converting the data to json
        .then((data) => {
          //structuring data and keeping data only that we want from api
          const countries = data.map(
            (
              country //map function is used to iterate over the data
            ) => ({
              name: country.country,
              value: country.countryInfo.iso2,
            })
          );
          setCountries(countries); //setting the data to the state
        });
    };
    getCountriesData(); //calling the function
  }, []);

  const onCountryChange = async (e) => {
    const countryCode = e.target.value;
    console.log(countryCode);
  }
  return (
    <div className="App">
      <Header onCountryChange = {onCountryChange} country={country} setCountry={setCountry} countries={countries} setCountries={setCountries} />
    </div>
  );
}

export default App;
