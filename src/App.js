import React from 'react';
import {Component} from 'react'
import Sidebar from './Components/Sidebar.js'
import Main from './Components/main.js'

class App extends Component{
  
render(){
  return(
    <div style={{  display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',}}>
      <h1>
        Julian has a small pp
      </h1>
      <Main></Main>
    </div>
  );
}

}

export default App;
