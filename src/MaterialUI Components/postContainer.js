import React from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography'
import CardActionArea from "@material-ui/core/CardActionArea"
import { CardContent, CardMedia } from '@material-ui/core';
import ReactPlayer from 'react-player'
const PostContainer = (props) => {
//Just an idea but we could make this website host art of whiffing moments from cedric
    const styles = {
        root: {
            maxWidth: 900,
            margin: 30,
            
        },
        media: {
            height: 150,
            margin: 30
        }
    }

    return (
        <div>
            <Card style={styles.root}>
            
            <CardMedia>
            <ReactPlayer muted controls url={props.url}></ReactPlayer>

            </CardMedia>
            <CardActionArea>
            <CardContent>
                <Typography gutterBottom variant={'h5'}>
                    {props.title}
                </Typography>
                <Typography gutterBottom variant={'p'}>
                    {props.description}
                </Typography>
            </CardContent>
            
            </CardActionArea>
            
            </Card>

        </div>
    )

}

export default PostContainer;