import React, {useState} from 'react';
import {Avatar, Grid, List, ListItem, ListItemAvatar, ListItemText, makeStyles} from '@material-ui/core';
import Header from "./Header";
import PokerTable from "./PokerTable";
import Deck from "./Deck";
import useRoom from "../zus/RoomZus";
import useUser from "../zus/UserZus";
import PersonIcon from '@mui/icons-material/Person';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import PendingIcon from '@mui/icons-material/Pending';
import useWebSocket from "react-use-websocket";
import {Enviroment} from "../utils/Enviroment";
import {UserInterface} from "../interfaces/UserInterface";
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
    const setUserListZus = useRoom((state) => state.setUserList);
    const user = useUser((state) => state.user);
    const [clear, setClear] = useState(false);

    const [userList, setUserList] = React.useState([]);

    // Define o callback para lidar com as mensagens do servidor
    const onMessage = React.useCallback((event: { data: string; }) => {
        // Analisa a string JSON recebida em um objeto JavaScript
        const message = JSON.parse(event.data);
        console.log('Mensagem recebida do servidor:', message);
        // Atualiza o estado do componente com a lista de usuários
        if (message.type === 'userList') {
            setUserList(message.data);
            setUserListZus(message.data);
        }
    }, []);

    const {sendJsonMessage} = useWebSocket(Enviroment.SERVER_URL, {
        onMessage,
    });

    // Envia uma mensagem para o servidor quando o componente é montado
    React.useEffect(() => {
        sendJsonMessage({
            type: 'getUserList',
        });
    }, [sendJsonMessage]);


    const classes = useStyles();

    const clearSelection = () => {
        setClear(!clear);
    }

    return (
            <Grid  direction="column" className={classes.root}>
                <Grid  className={classes.header}>
                    {<Header userName={user.userName} roomName={room.roomName}/>}
                </Grid>
                <List style={{position:"absolute"}}>
                    {userList.map(((user : UserInterface) => (
                            <ListItem key={user.userId}>
                                <ListItemAvatar>
                                    {user.vote ? (
                                        <CheckCircleOutlineIcon style={{ fill: "green" }} />
                                    ) : (
                                        <PendingIcon />
                                    )}
                                </ListItemAvatar>
                                <ListItemText primary={user.userName} />
                            </ListItem>
                    )))}
                </List>
                <Grid  className={classes.table}>
                    {<PokerTable onClearSelection={()=>clearSelection()}/>}
                </Grid>
                <Grid  className={classes.pokerCards}>
                    {<Deck room={room} user={user} clear={clear}/>}
                </Grid>
            </Grid>
    );
};

export default PokerPage;
