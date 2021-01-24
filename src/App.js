import React from 'react';
import {Component} from 'react'
import Sidebar from './Components/Sidebar.js'
import Mainpage from './Pages/mainpage'
import {Route} from 'react-router-dom'
import PostContainer2 from './MaterialUI Components/postContainer2'
import SignUp from "./Pages/signup"
import Login from "./Pages/login"
class App extends Component{
  
render(){
  return(
    <div style={{  display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',}}>
    <Route path={'/yeet'}>
      <h2>Wow how did you find this</h2>
    </Route>
    <Route exact path={['/', '/emission']} component={Mainpage}></Route>
    <Route exact path={'/juuls'} component={Mainpage}></Route>
    <Route exact path={'/test'}> <PostContainer2></PostContainer2> </Route>
    <Route exact path={'/signup'} component={SignUp}></Route>
    <Route exact path={'/login'} component={Login}></Route>
    </div>
  );
}

}

export default App;
