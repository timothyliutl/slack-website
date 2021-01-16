import React, { useState } from 'react';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography'
import ListItem from "@material-ui/core/ListItem"


const Sidebar = (props) =>{

    const drawerStyle ={
        width: 200,
        overflowX:'hidden',
        margin: 30,
        

    }
    return(
        <div>
                <Drawer anchor={'left'} open={props.isOpen} onClose={props.openFunct}>
                <div style={drawerStyle}>
                    <ListItem onClick={props.openFunct}>
                        <Typography variant={'h6'}> Cedric Lowlights</Typography>
                    </ListItem>
                    
                </div>
                </Drawer>
                
        </div>
    )
}

export default Sidebar;