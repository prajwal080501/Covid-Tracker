import React from 'react';
import "./Header.css";
import {FormControl, Select, MenuItem} from '@material-ui/core';

const Header = ({countries, setCountries}) => {
    return (
        <div className="app__header">
        <h1>COVID-19 TRACKER</h1>
        <FormControl className="app__dropdown">
          <Select className="app__select" variant="outlined" value="abc">
            {countries.map(country => (
              <MenuItem value={country.value}>{country.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
        </div>
    )
}

export default Header
