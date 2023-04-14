import React, { useState } from 'react';
import {TextField, Button, Grid, makeStyles} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    textField: {
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingBottom: 0,
        marginTop: 0,
        fontWeight: 500,
        border: "white"
    },
    input: {
        color: 'white'
    }
}));

const CreateRoomForm = () => {
    const [roomName, setRoomName] = useState('');

    const handleSubmit = (event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Aqui você pode fazer a requisição para criar a sala
    };


    const classes = useStyles();
    return (
        <form onSubmit={handleSubmit}>
            <Grid   container
                    spacing={2}
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    style={{ minHeight: '80vh' }}>
                <Grid item xs={12}>
                    <TextField
                        label="Nome da sala"
                        variant="outlined"
                        fullWidth
                        value={roomName}
                        onChange={(event) => setRoomName(event.target.value)}
                        margin="normal"
                        InputProps={{
                            style: { borderColor: 'red' }
                        }}
                    />
                    <Grid container justifyContent="center">
                        <Button type="submit" variant="contained" color="primary">
                            Criar sala
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </form>
    );
};

export default CreateRoomForm;

