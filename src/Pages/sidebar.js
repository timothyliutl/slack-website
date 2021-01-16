import React, { useState } from 'react';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography'


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
                    <Typography variant={'h6'}> Cedric Lowlights</Typography>
                </div>
                </Drawer>
                
        </div>
    )
}

export default Sidebar;