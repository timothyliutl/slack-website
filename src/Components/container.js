import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper'
class Container extends Component {
    //TODO: make it so that when the paper is clicked on, it opens a larger paper, similar to notion
    //can use modals or redirect to another page something to do this
    
    state = {
        hover: false
    }

   //function that handles animations
    onHover = () =>{
      
        this.setState({hover:true})
    }

    notHover = () =>{
        
        this.setState({hover:false})
    }
 //Function that opens a modal
    onClick = () =>{
        
        
    }

    //potential animation function
    
  
    
    render(){
        var paperStyles = {
            width: this.props.width||250,
            height: this.props.height||250,
            margin: 50,
            
            padding: 5,
            borderRadius: 40,
            border: '1px',
            //react doesnt support transitions for color gradients yet
            //background:this.state.hover?'linear-gradient(#e66465, #9198e5)':'linear-gradient(#4934eb, #8f34eb)',
            background:this.state.hover?'#00B4D8':'#90E0EF',
            transition: "all 0.8s ease",
            WebkitTransition: "all 0.8s ease",
            MozTransition:"all 0.8s ease",
            
        }
        return (
        <div>
            <Paper style={paperStyles} elevation={this.state.hover?8:1} onMouseLeave={this.notHover} onMouseEnter={this.onHover} onClick={this.onClick}>

                <h2 style={{textAlign:'center'}}>Label</h2>
                
                
            </Paper>
        </div>
    )
    }
    
}

export default Container; 