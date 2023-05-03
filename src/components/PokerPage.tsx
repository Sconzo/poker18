import React from 'react';
import {Grid, makeStyles} from '@material-ui/core';
import Header from "./Header";
import PokerTable from "./PokerTable";
import Deck from "./Deck";
import useRoom from "../zus/RoomZus";
import useUser from "../zus/UserZus";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        margin: 0,
        height: "100vh",
    },
    header: {
        backgroundColor: theme.palette.background.default,
        color: theme.palette.primary.contrastText,
        height: "15%",
        flexGrow: 1,
        width: "100%",
    },
    table: {
        color: theme.palette.primary.contrastText,
        height: "65%",
        flexGrow: 1,
        width: "100%",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingRight:"30px",
    },
    pokerCards: {
        color: theme.palette.secondary.contrastText,
        height: "20%",
        flexGrow: 1,
        width: "100%",
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
}));

const PokerPage = () => {

    const room = useRoom((state) => state.room);
    const user = useUser((state) => state.user);


    const classes = useStyles();

    return (
            <Grid  direction="column" className={classes.root}>
                <Grid  className={classes.header}>
                    {<Header userName={user.userName} roomName={room.roomName}/>}
                </Grid>
                <Grid  className={classes.table}>
                    {<PokerTable/>}
                </Grid>
                <Grid  className={classes.pokerCards}>
                    {<Deck room={room} spectator={user.spectator}/>}
                </Grid>
            </Grid>
    );
};

export default PokerPage;
