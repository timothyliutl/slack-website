import React from 'react';
import Appbar from './appbar'
import { useState } from 'react'
import Sidebar from './sidebar'
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';


interface props {
    notifications: any,
    profileName: String
}

const Profile = (props: props) => {

    const pageStyle = {
        width:'100%'
    }
    const profileStyle ={
        marginTop:300,
        marginLeft:200,
        marginRight:200,
        
    }

    interface notifications {
        iconActive: boolean
    }
    const imageStyle = {
        borderRadius: "50%",
        height: 50,
        width: 50,

    }
    const [isAppBarOpen, setIsAppBarOpen] = useState(false);
    const [notifications] = useState<notifications>({ iconActive: false });



    return (<div style={pageStyle}>
        <Appbar openFunct={setIsAppBarOpen}></Appbar>
        <Sidebar isOpen={isAppBarOpen} openFunct={setIsAppBarOpen}></Sidebar>
        
            <div style={profileStyle}>
                    <Grid container alignItems={'flex-start'} direction={'row'} spacing={4}>
                    <Grid item>
                        <img style={imageStyle} src={'https://i.redd.it/avzqcqngbvy51.jpg'}></img>
                    </Grid>
                        <Grid item>
                            <Grid container direction={'column'} alignItems={'center'}>
                                <Grid item>
                                    <Typography variant={'h5'}>Profile Name</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant={'subtitle1'}> 69 Lowlights</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid> 

            </div>

        

    </div>)
}

export default Profile;