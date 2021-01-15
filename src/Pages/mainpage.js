import React from 'react';
import {Component} from 'react'
import Appbar from './appbar'

class Mainpage extends Component{
//Main homepage for the application
    style={
    width:'100%'
    }
    render(){
        return(
            <div style={this.style}>
                <Appbar></Appbar>
            </div>
        )
    }
}
export default Mainpage;