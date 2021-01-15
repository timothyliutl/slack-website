import React from 'react';
import {Component} from 'react'
import Appbar from './appbar'
import PostContainer from '../MaterialUI Components/postContainer'

class Mainpage extends Component{
//Main homepage for the application
    style={
    width:'100%'
    }
    render(){
        return(
            <div style={this.style}>
                <Appbar></Appbar>
                <PostContainer></PostContainer>
            </div>
        )
    }
}
export default Mainpage;