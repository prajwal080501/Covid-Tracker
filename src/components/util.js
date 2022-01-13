

//Function to sort table data by number of cases countrywise.

export const sortData = (data) => {
    
    const sortedData = [...data];

    return sortedData.sort((a, b) => (a.cases > b.cases) ? -1 : 1);
        
}