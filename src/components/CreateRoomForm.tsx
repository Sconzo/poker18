import React, {useState} from 'react';
import {TextField, Button, Grid, makeStyles, MenuItem} from '@material-ui/core';
import {useAppThemeContext} from "../contexts";
import {Box, FormHelperText, Input, InputLabel, Select} from "@mui/material";
import {FormControl} from '@mui/material';
import {System} from "../utils/enviroment/System";
import coffee from "../images/coffee.png"
import { useNavigate } from "react-router-dom";

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

}));

const possibleSystems = [
    {
        value: System.BASIC,
        label: (
            <>
                Padrão (1, 2, 4, 8, 16, <img src={coffee} alt="Coffee" style={{ width: "20px", height: "20px", paddingBottom:"7px", paddingLeft:"3px" }}/>)
            </>
        ),
    },
    {
        value: System.FIBONACCI,
        label: (
            <>
                Fibonacci (0, 1, 2, 3, 5, 8, 13, 21, 34, 55, <img src={coffee} alt="Coffee" style={{ width: "20px", height: "20px", paddingBottom:"7px", paddingLeft:"3px" }}/>)
            </>
        ),
    },
    {
        value: System.CUSTOM,
        label: "Criar novo sistema"
    }

];

const initialFormData = Object.freeze({
    roomName: "",
    roomSystem: ""
});

const CreateRoomForm = () => {
    const [roomName, setRoomName] = useState('');
    const [votingSystem, setVotingSystem] = useState('');
    const [formData, updateFormData] = useState(initialFormData);
    const [selectedValue, setSelectedValue] = useState('');

    const handleSubmit = (e: any) => {
        e.preventDefault();
        routeChange();
        console.log(formData)
    };
    let navigate = useNavigate();
    const routeChange = () => {
        navigate("/poker");
    };

    const {toggleTheme} = useAppThemeContext()

    const handleChangeName = (e: any) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim(),
        });
    };

    const handleChangeSystem = (e: any) => {
        setSelectedValue(e.target.value);
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim(),
        });
    };

    const classes = useStyles();
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
                        label="Nome da Sala"
                        variant="filled"
                        className={classes.textField}
                        onChange={handleChangeName}
                        name="roomName"
                    />
                    <TextField
                        select
                        label="Select"
                        helperText="Selecione o sistema de votação"
                        className={classes.margin_bottom_40}
                        onChange={handleChangeSystem}
                        name="roomSystem"
                    >
                        {possibleSystems.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <Button variant="contained" color="primary" onClick={($event) => handleSubmit($event)}>Criar</Button>

                </FormControl>

            </Box>
        </div>
    );
};

export default CreateRoomForm;

