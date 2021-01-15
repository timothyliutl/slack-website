import React from 'react';
import {Component} from 'react'
import Sidebar from './Components/Sidebar.js'
import Mainpage from './Pages/mainpage'

class App extends Component{
  
render(){
  return(
    <div style={{  display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',}}>
   <Mainpage></Mainpage>
    </div>
  );
}

}

export default App;
