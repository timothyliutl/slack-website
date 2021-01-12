import React from 'react';
import { Button, button } from '@material-ui/core';
import { TextField } from "@material-ui/core";
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"

var style = {
    alignItems: 'center',
    justifyContent: 'center',

    marginTop: "10%",
}
var textfieldStyle = {
    width: 300,
    height: 75
}

var buttonStyle = {
    margin: 15
}



//TODO: Work on Creating POST and GET requests to the backend
const LoginPage = () => {

    return (
        <div style={style}>
        <Grid container direction='column' alignItems='center' justify='center'>
       <Paper elevation={5} style={{width:350, height:400, padding:25, borderRadius:25}}>
        <h1>enQuire Login</h1>
        <p>Welcome Back</p>
            <Grid container={true} direction={'column'}>
                <Grid item>
                    <TextField variant="outlined" label="Username" style={textfieldStyle}></TextField>
                </Grid>
                <Grid item={true}>
                    <TextField variant="outlined" label="Password" style={textfieldStyle} type={'password'}></TextField>
                </Grid>
               
                <Grid direction={'row'} spacing={5}>
                 
                    <Button style={buttonStyle} variant={'contained'} color={'primary'}>Login</Button>
                                        
                    
                </Grid>
                
                    <p>New to enQuire? <a href={"localhost:3000"}>Create New Account</a></p>
               
            </Grid>
            </Paper>
            </Grid>
        </div>
    );
}

export default LoginPage;