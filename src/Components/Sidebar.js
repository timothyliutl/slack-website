import { Paper } from '@material-ui/core';
import React, { Component } from 'react';
import Container from './container'

class Sidebar extends Component {
    sidebar_style = {
        height: '100vh',
        width: 250,
        position: 'absolute',
        left: 0,
        top:0,
        borderRadius: 40,
        background: '#00B4D8'
        }

render(){
    
    return(<div>
        <Paper style={this.sidebar_style}>
            
        </Paper>
    </div>)
}

}

export default Sidebar;