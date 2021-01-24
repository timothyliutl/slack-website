import React, { useState } from 'react';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography'
import ListItem from "@material-ui/core/ListItem"
import {Link} from 'react-router-dom'
import Divider from '@material-ui/core/Divider'


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
                    <ListItem>
                        <Typography variant={'h5'} style={{fontWeight:'bold'}}>Featured Lowlights</Typography>
                    </ListItem>
                    <Divider style={{marginBottom:15}}/>
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