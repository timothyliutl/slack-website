import React from 'react';
import { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import { Button, Drawer, IconButton, MenuItem, Toolbar, Typography, Menu, Paper } from '@material-ui/core';
import ListIcon from '@material-ui/icons/List';
import NotificationsIcon from '@material-ui/icons/Notifications';
import {useState} from 'react';



//TODO: Add dropdown menu
//TODO: Add hyperlinks and react router
//Drawer uses react wtih hooks, take a look at it before programming the popup feature
//this is really just the app bar
const Appbar = (props)=> {

    const style = {
        width: '100%',
        marginBottom:100
    }

    const mainbodystyle ={
        marginLeft: "15%",
        marginRight: "15%",
        marginTop: 20,

    }

    const dropdownStyle={
        width: 200,

    }

        //if confused on this syntax look up array destructuring
        const [anchorEL, setanchorEl] = useState(null);
        const [elevation, setElevation] = useState(0);
        const [id, setid] = useState(null);

        //Have a solution, but it's kinda wack
        //Process can be more automated once we have maps and ids
        const onHover = (event)=>{
            setElevation(6);
            setid(event.currentTarget.id)
            //get's the id for the component
            console.log(event.currentTarget.id)
        }
        const onLeave = (event)=>{
            setElevation(0);
            setid(null)
        }

        const handleClick=(event)=>{
            setanchorEl(event.currentTarget);
        };
        const handleClose=()=>{
            setanchorEl(null);
        }

        return (
            <div style={style}>
                <AppBar position={'fixed'}>
                    <Toolbar>
                        <IconButton edge={'start'} onClick={props.openFunct}>
                            <ListIcon></ListIcon>
                        </IconButton>
                        <Typography variant={'h6'} style={{flex: 1}}>
                            Menu
                        </Typography>
                        <IconButton edge={'end'} onClick={handleClick}>
                            <NotificationsIcon></NotificationsIcon>
                        </IconButton>
                        <Menu anchorEl={anchorEL} open={Boolean(anchorEL)} onClose={handleClose}>
                            <Paper id={'123'} style={{width:400, height: 200, padding:20, margin:20}} onClick={handleClose} onMouseEnter={onHover} onMouseLeave={onLeave} elevation={'123'===id?elevation:0}>
                                Yeet
                            </Paper>
                            <Paper id={'ksdjf'} style={{width:400, height: 200, padding:20, margin:20}} onClick={handleClose} onMouseEnter={onHover} onMouseLeave={onLeave} elevation={'ksdjf'===id?elevation:0}>
                                Apple {'>'} Eng Phys
                            </Paper>
                          
                            <Paper id={'jsdhf'} style={{width:400, height: 200, padding:20, margin:20}} onClick={handleClose} onMouseEnter={onHover} onMouseLeave={onLeave} elevation={'jsdhf'===id?elevation:0}>
                                Hello There
                            </Paper>
                        </Menu>
                        <Button style={{borderRadius:25}}>
                            Logout
                        </Button>
                    </Toolbar>

                </AppBar>
            </div>
        )
    
}

export default Appbar;