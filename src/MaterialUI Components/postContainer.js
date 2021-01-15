import React from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography'
import CardActionArea from "@material-ui/core/CardActionArea"
import { CardContent, CardMedia } from '@material-ui/core';
import ReactPlayer from 'react-player'
const PostContainer = () => {
//Just an idea but we could make this website host art of whiffing moments from cedric
    const styles = {
        root: {
            maxWidth: 600,
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
            <CardActionArea>
            <CardMedia>
            <img style={styles.media} src={'https://i.kym-cdn.com/photos/images/newsfeed/001/857/750/4ab.png'}></img>

            </CardMedia>
            <CardContent>
                <Typography gutterBottom variant={'h5'}>
                    Big Sadge Moment
                </Typography>
            </CardContent>
            
            </CardActionArea>
            
            </Card>

            <Card style={styles.root}>
            <CardActionArea>
            <CardMedia>
            <ReactPlayer controls url={'https://d27h4k8kbgv31z.cloudfront.net/1412c71c-d9d9-4253-8b5e-ebaafcc7580f/1610248112554-artofwhiffing.mp4'}></ReactPlayer>

            </CardMedia>
            <CardContent>
                <Typography gutterBottom variant={'h5'}>
                    Big Sadge Moment
                </Typography>
            </CardContent>
            
            </CardActionArea>
            
            </Card>

            <Card style={styles.root}>
            <CardActionArea>
            <CardMedia>
            <img style={styles.media} src={'https://i.kym-cdn.com/photos/images/newsfeed/001/857/750/4ab.png'}></img>

            </CardMedia>
            <CardContent>
                <Typography gutterBottom variant={'h5'}>
                    Big Sadge Moment
                </Typography>
            </CardContent>
            
            </CardActionArea>
            
            </Card>
        </div>
    )

}

export default PostContainer;