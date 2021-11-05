import React from 'react';
import "./Header.css";
import {FormControl, Select, MenuItem} from '@material-ui/core';

const Header = ({countries, setCountries, country, setCountry, onCountryChange}) => {
    return (
        <div className="app__header">
        <h className="brand">COVID-19 TRACKER</h>
        <FormControl className="app__dropdown">
          <Select onChange={onCountryChange} className="app__select" variant="outlined" value={country}>
          <MenuItem value="worldwide">Worldwide</MenuItem>
            {countries.map(country => (
           
              <MenuItem className="app__menuitem" value={country.value}>{country.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
        </div>
    )
}

export default Header
