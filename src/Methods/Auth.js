import React from 'react';
const axios = require('axios');
const Auth=(username, password)=>{
    console.log(username)
    console.log(password)
    const postData = {
        userName: username,
        password: password
    }
    fetch("https://localhost:3000", {method: 'POST', headers:postData}).then(function(data){
        console.log(data)
    }).catch(function(err){
        console.log(err)
    })
    
    
}

export default Auth;