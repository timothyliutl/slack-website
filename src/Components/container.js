import React from 'react';
import Paper from '@material-ui/core/Paper'
const Container = (props) => {
    //TODO: make it so that when the paper is clicked on, it opens a larger paper, similar to notion
    //can use modals or redirect to another page something to do this
    
    const paperStyles = {
        width: props.width||200,
        height: props.height||200,
        margin: 50,
        padding: 25,
        borderRadius: 40,
        border: '1px'
    }
    return (
        <div>
            <Paper style={paperStyles} elevation={5} >
                <h2>Title</h2>
                <p>Text or whatever you want to put in here</p>
                <img style={{
                    flex: 1,
                    width: 100,
                    height: 100,
                    resizeMode: 'contain'
                }} src={'https://i.redd.it/ix6ombra6r761.jpg'}></img>
            </Paper>
        </div>
    )
}

export default Container; 