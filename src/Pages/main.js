import React from 'react';
import { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import { Button, IconButton, Toolbar, Typography } from '@material-ui/core';
import ListIcon from '@material-ui/icons/List';
import NotificationsIcon from '@material-ui/icons/Notifications';

class Mainpage extends Component {

    style = {
        width: '100%'
    }

    render() {
        return (
            <div style={this.style}>
                <AppBar position={'static'}>
                    <Toolbar>
                        <IconButton edge={'start'} >
                            <ListIcon></ListIcon>
                        </IconButton>
                        <Typography variant={'h6'} style={{flex: 1}}>
                            Menu
                    </Typography>
                        <IconButton edge={'end'}>
                            <NotificationsIcon></NotificationsIcon>
                        </IconButton>
                        <Button style={{borderRadius:25}}>
                            Logout
                        </Button>
                    </Toolbar>

                </AppBar>
                <h1>Julian has big pp</h1>
            </div>
        )
    }
}

export default Mainpage;