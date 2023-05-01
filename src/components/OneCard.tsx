import {Box, Card, CardActionArea, CardContent, makeStyles, Typography} from '@material-ui/core';
import React from "react";

const useStyles = makeStyles((theme) => ({
    root: {
        margin: 0,
        color:'black',
        backgroundColor:'red',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

        borderRadius: '8px'
    },
}));

interface cardProps {
    value : string
}
const OneCard = (props : cardProps) => {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardActionArea href="https://google.com">
                <CardContent>
                    {props.value}
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default OneCard;