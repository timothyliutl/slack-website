import React from 'react';
const axios = require('axios');
const Auth=(username, password)=>{
    
    const postData = {
        userName: username,
        password: password
    }
    //for some reason it only works for http but not https
    fetch("http://localhost:3000/login", {method: 'POST', headers:postData}).then(function(data){
        console.log(data)
    }).catch(function(err){
        console.log(err)
    })
    
    
}

export default Auth;