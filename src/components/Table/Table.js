import React from 'react';
import "./Table.css";

const Table = ({countries}) => {
    return (
        <div className="table">
            {countries.map(({country, cases}) => ( // map through the countries array here we have not destructured the entire object but we have destructured objects in that data seprtely
                <tr className="table__row">
                    <td assName="table__data">{country}</td>
                    <td className="table__data"><strong>{cases}</strong></td>
                </tr>
            ))}
        </div>
    )
}

export default Table
