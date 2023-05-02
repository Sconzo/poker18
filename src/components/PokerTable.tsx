import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import {Button} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    table: {
        backgroundColor: theme.palette.secondary.light,
        borderRadius: theme.shape.borderRadius,
        height: "20vh",
        width: "40vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        margin: "auto",
        marginBottom: "2rem",
    },
    player: {
        position: "absolute",
        width: "3rem",
        height: "3rem",
        backgroundColor: "#FFFFFF",
        borderRadius: theme.shape.borderRadius,
    },
    button:{
        backgroundColor: theme.palette.secondary.main,
    },
    player1: {
        top: "calc(50% - 1.5rem)",
        left: "-2rem",
    },
    player2: {
        top: "-2rem",
        left: "calc(50% - 1.5rem)",
    },
    player3: {
        top: "calc(50% - 1.5rem)",
        right: "-2rem",
    },
    player4: {
        bottom: "-2rem",
        left: "calc(50% - 1.5rem)",
    },
}));

const PokerTable = () => {
    const classes = useStyles();

    const cardsReveal = () => {

    }

    return (
        <Grid container direction="column" alignItems="center">
            <Box className={classes.table}>
                <Button onClick={() => cardsReveal()} className={classes.button}>Revelar</Button>
                <Box className={classes.player + " " + classes.player1} />
                <Box className={classes.player + " " + classes.player2} />
                <Box className={classes.player + " " + classes.player3} />
                <Box className={classes.player + " " + classes.player4} />
            </Box>
        </Grid>
    );
};
export default PokerTable;