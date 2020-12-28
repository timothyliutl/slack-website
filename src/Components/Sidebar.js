import { Paper } from '@material-ui/core';
import React, { Component } from 'react';
import Container from './container'

class Sidebar extends Component {
    sidebar_style = {
        height: '100%',
        width: 250
        }

render(){
    
    return(<div>
        <Paper style={this.sidebar_style}></Paper>
    </div>)
}

}

export default Sidebar;