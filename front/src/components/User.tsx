import {Box, FormControl, ToggleButton} from "@mui/material";
import {Button, FormControlLabel, makeStyles, MenuItem, Switch, TextField} from "@material-ui/core";
import React, {useState} from "react";
import {RoomInterface} from "../interfaces/RoomInterface";
import {UserInterface} from "../interfaces/UserInterface";
import {useNavigate} from "react-router-dom";
import useUser from "../zus/UserZus";
import { v4 as uuidv4 } from "uuid";
import useWebSocket from "react-use-websocket";
import {Enviroment} from "../utils/Enviroment";
import useRoom from "../zus/RoomZus";

const useStyles = makeStyles((theme) => ({
    textField: {
        width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 15,
        paddingBottom: 0,
        marginTop: 0,
        fontWeight: 500,
        border: "white"
    },
    input: {
        color: 'white'
    },
    margin_bottom_40: {marginBottom: 40},
    selectedOption: {
        width: "20px",
        height: "20px",
    },
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
}));

const initialFormData : UserInterface = {
    userId : "",
    userName: "",
    spectator : false,
    vote : ""
};
const User = () => {
    const classes = useStyles();
    const [formData, updateFormData] = useState(initialFormData);
    const setUser = useUser(((state) => state.setUser));
    const addUser = useRoom(((state) => state.addUser));
    const [checked, setChecked] = useState(false);
    let navigate = useNavigate();
    const userId = uuidv4();
    const {sendJsonMessage, sendMessage} = useWebSocket(Enviroment.SERVER_URL);
    function tellServer() {
    debugger
        const message = {
            type: "create",
            data : {
                userId: formData.userId,
                userName: formData.userName,
                spectator: formData.spectator,
                vote: "",
            }
        };
        sendMessage(JSON.stringify(message));
    }

    const routeChange = () => {
        navigate("/poker");
    };
    const handleChangeName = (e: any) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim(),
            userId: userId,
        });
    };

    const handleSwitch = (e: any) => {
        setChecked(e.target.checked)
        updateFormData({
            ...formData,
            spectator: e.target.checked,
        });
    };
    const handleSubmit = (e: any) => {
        e.preventDefault();
        routeChange();
        setUser(formData);
        tellServer();
        addUser(formData)
    };

    return (
        <div>
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                minHeight="100vh"

            >

                <FormControl >
                    <TextField
                        id="outlined-basic"
                        label="Nome do Usuário"
                        variant="filled"
                        className={classes.textField}
                        onChange={handleChangeName}
                        name="userName"
                    />
                    <FormControlLabel
                        value="end"
                        control={<Switch checked={checked} onChange={handleSwitch}
                                         color="secondary" />}
                        label="Espectador"
                        labelPlacement="end"
                        className={classes.textField}
                        onChange={handleSwitch}
                    />
                    <Button variant="contained" color="primary" onClick={($event) => handleSubmit($event)}>Entrar</Button>

                </FormControl>

            </Box>
        </div>
    );
};

export default User;