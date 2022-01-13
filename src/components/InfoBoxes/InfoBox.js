import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import "./InfoBox.css";
const InfoBox = ({title, cases, total}) => {
    return (
       
            <Card className="infobox">
            <CardContent>
                <Typography className="infobox__title" color="text-secondary" >{title}</Typography>
                <h2 className="infobox__cases">{cases}</h2>
                <Typography className="infobox__total" color="text-secondary" >{total} Total</Typography>
            </CardContent>
        </Card>
        
    )
}

export default InfoBox;
