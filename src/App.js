import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import InfoBox from "./components/InfoBoxes/InfoBox";
import Map from "./components/Map/Map";
import { Card, CardContent } from "@material-ui/core";
import Table from "./components/Table/Table";
import { sortData } from "./components/util";
import LineGraph from "./components/LineGraph/LineGraph";
import "leaflet/dist/leaflet.css";
function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("worldwide");
  const [countryInfo, setCountryInfo] = useState({});// this usestate is to store all the data we from the api call for all countries
  const [tableData, setTableData] = useState([]);
  const [mapCenter, setMapCenter] = useState({ lat: 34.80746, lng: -40.4796 });
  const [mapZoom, setMapZoom] = useState(3);
  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/all")
      .then(response => response.json())
      .then(data => {
        setCountryInfo(data);
    })
  }, [])
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
          const sortedData = sortData(data); ///calling the sortData function to sort the data by cases countrywise
          setTableData(sortedData);
          setCountries(countries); //setting the data to the state
        });
    };

    getCountriesData(); //calling the function
  }, []);

  const onCountryChange = async (e) => {
    const countryCode = e.target.value;
    setCountry(countryCode);

    const url = countryCode === "worldwide" ? "https://disease.sh/v3/covid-19/all" : `https://disease.sh/v3/covid-19/countries/${countryCode}`;

    await fetch(url)
      .then(response => response.json())
      .then(data => {
        setCountry(countryCode);
        // Storing all countries data in the state.

        setCountryInfo(data);
    })
  };

  console.log("country-info >>>" , countryInfo);
  return (
    <>
      <div className="App">
      
        <div className="app-left">
        <Header
            onCountryChange={onCountryChange}
            country={country}
            setCountry={setCountry}
            countries={countries}
            setCountries={setCountries}
          />

        <div className="app__stats">
          <InfoBox title="Coronavirus cases" total={countryInfo.cases} cases={countryInfo.todayCases} />
          <InfoBox title="Coronavirus recovered" total={countryInfo.recovered} cases={countryInfo.todayRecovered} />
          <InfoBox title="Coronavirus deaths" total={countryInfo.deaths}cases={countryInfo.todayDeaths} />
        </div>
        <Map center={mapCenter} zoom={mapZoom} />
        </div>
        <Card className="app-right">
          <CardContent>
            <h3>Live Cases by country</h3>
            <Table countries={tableData} />
            <h3>Worldwide new Cases</h3>
            <LineGraph />
          </CardContent>
        </Card>
        </div>

    </>
  );
}

export default App;
