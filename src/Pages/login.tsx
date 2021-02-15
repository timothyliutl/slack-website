import React, { Component } from 'react';
import { Button, GridList, GridListTile, Typography } from '@material-ui/core';
import { TextField } from "@material-ui/core";
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import { Link } from "react-router-dom"
import Appbar from './appbar'
import Auth from "../Methods/Auth"
import Sidebar from "./sidebar"

//TODO: Work on Creating POST and GET requests to the backend

type stateType = {
    username: String,
    password: String,
    appDrawerOpen: boolean,
    token: String
}


class LoginPage extends Component {

    state:stateType={
        username: "",
        password:"",
        appDrawerOpen: false,
        token:""
    }
    

    setOpen = () =>{
        this.setState({appDrawerOpen:!this.state.appDrawerOpen});
    }
    updateUsername = (event: any) =>{
        this.setState({username: event.target.value})
    }
    updatePassword = (event: any)=>{
        this.setState({password: event.target.value})
    }

    login = () =>{
        Auth(this.state.username, this.state.password);
    }

    render() {
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

        var linkStyle = {
            textDecoration: 'none',
            color: 'blue'
        }

        

        return (
            <div style={style}>
                <Appbar openFunct ={this.setOpen}></Appbar>
                <Sidebar isOpen={this.state.appDrawerOpen} openFunct={this.setOpen} notLoggedIn={true}></Sidebar>
                <Grid container direction='column' alignItems='center' justify='center'>
                    <Paper elevation={5} style={{ width: 350, height: 400, padding: 25, borderRadius: 25 }}>
                        <Grid container justify={'center'}>
                            <Typography variant={'h2'}>Lowlights</Typography>
                            <Typography variant={'h6'}>Welcome Back</Typography>
                        </Grid>
                        <Grid container={true} direction={'column'} justify={'center'} alignItems={'center'}>
                            <Grid item>

                                <TextField variant="outlined" label="Username" style={textfieldStyle} onChange={this.updateUsername} value={this.state.username}></TextField>

                            </Grid>
                            <Grid item={true}>

                                <TextField variant="outlined" label="Password" style={textfieldStyle} type={'password'} onChange={this.updatePassword} value={this.state.password}></TextField>

                            </Grid>

                            <Grid item>

                                <Button style={buttonStyle} variant={'contained'} color={'primary'} onClick={this.login}>Login</Button>


                            </Grid>
                            <Grid container direction={'row'} justify={'space-between'}>
                                <Grid item>
                                    <p>New to Lowlights?</p>
                                </Grid>
                                <Grid item>
                                    <Link to={'/signup'} style={linkStyle}><p>Sign Up Here</p></Link>
                                </Grid>
                            </Grid>



                        </Grid>
                    </Paper>
                </Grid>
                <GridList>
                    <GridListTile>
                        
                    </GridListTile>
                </GridList>
            </div>
        );
    }
}

export default LoginPage;