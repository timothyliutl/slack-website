import React from 'react';
import {Component} from 'react'
import Appbar from './appbar'
import PostContainer from '../MaterialUI Components/postContainer'
import { FullscreenExit } from '@material-ui/icons';
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Sidebar from './sidebar'

class Mainpage extends Component{
//Main homepage for the application
    state = {
        appDrawerOpen: false
    }

    setOpen = () =>{
        this.setState({appDrawerOpen:!this.state.appDrawerOpen});
    }


    render(){

        return(
            <div>
                <Appbar openFunct = {this.setOpen}></Appbar>

                <Sidebar isOpen = {this.state.appDrawerOpen} openFunct = {this.setOpen}></Sidebar>
                
                <Grid container alignItems={'center'} justify={'center'}>
                    <Grid item>
                            <Typography variant={'h1'}>
                                Big oofs from Emission
                            </Typography>
                    </Grid>
                </Grid>
                <Grid container spacing={1} alignItems={'center'} justify={'center'}>
                    

                <Grid item >
                  <PostContainer 
                url={'https://d27h4k8kbgv31z.cloudfront.net/1412c71c-d9d9-4253-8b5e-ebaafcc7580f/1610248112554-artofwhiffing.mp4'}
                description={'Bruh feat Emission'} 
                title={'Big Sadge Moment'}   ></PostContainer>  
                </Grid>
                
                <Grid item>
                <PostContainer 
                    url={'https://d27h4k8kbgv31z.cloudfront.net/1412c71c-d9d9-4253-8b5e-ebaafcc7580f/1610769830703-Replay_VALORANT_01-15_22574121.webm'}
                    description={';-; feat Emission and his fat fingers'}
                    title={'Nice Clutch...'}>
                </PostContainer>
                </Grid>
                
                </Grid>

            </div>
        )
    }
}
export default Mainpage;