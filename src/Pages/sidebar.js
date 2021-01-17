import React, { useState } from 'react';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography'
import ListItem from "@material-ui/core/ListItem"
import {Link} from 'react-router-dom'


const Sidebar = (props) =>{

    const linkStyle ={
        textDecoration: 'none',
        color: 'black'
    }

    const drawerStyle ={
        minWidth: 200,
        overflowX:'hidden',
        margin: 30,
        

    }
    return(
        <div>
                <Drawer anchor={'left'} open={props.isOpen} onClose={props.openFunct}>
                <div style={drawerStyle}>
                    <ListItem onClick={props.openFunct}>
                        <Link to={'/emission'} style={linkStyle}>
                            <Typography variant={'h6'}>Emission Lowlights</Typography>
                        </Link>
                        
                    </ListItem>
                    <ListItem onClick={props.openFunct}>
                        <Link to={'/juuls'} style={linkStyle}>
                            <Typography variant={'h6'}>Juuls Lowlights</Typography>
                        </Link>
                            
                    </ListItem>
                    
                </div>
                </Drawer>
                
        </div>
    )
}

export default Sidebar;