import {Grid, Typography, makeStyles, Button, Box} from '@material-ui/core';
import React from "react";
import OneCard from "./OneCard";

const useStyles = makeStyles((theme) => ({
    root: {
        margin: 0,
        height: 'auto',
        color:'black',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
}));
interface HeaderProps {
    userName: string;
    roomName: string;
}

const Deck = () => {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <OneCard value={"1"}/>
        </Box>
    );
};

export default Deck;