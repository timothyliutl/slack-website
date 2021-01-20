import React from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography'
import CardActionArea from "@material-ui/core/CardActionArea"
import { Button, CardContent, CardMedia, Grid } from '@material-ui/core';
import ReactPlayer from 'react-player'


const PostContainer2 = (props) => {

    const cardStyle = {
        minWidth: 100,
        minHeight: 100,
    }

    const cardMargin = {
        marginBottom: 10
    }

    return (
        <div>
            <Card style={cardStyle}>
                <CardMedia>
                    <img src={'https://149345591.v2.pressablecdn.com/wp-content/uploads/2016/10/0ecff498c2c0fb05ee659508afa154ac-350x200.gif'}></img>
                </CardMedia>
                <CardActionArea>
                    <CardContent>
                        <Grid container alignContent={'center'} justify={'left'} direction={'column'}>
                            <Grid item>
                                <Typography align={'left'} variant={'h5'}>Title Here</Typography>
                            </Grid>
                            <Grid item align={'left'}>
                                <p>Username</p>
                            </Grid>
                            <Grid container justify={'space-between'}>
                                <Grid item >
                                    <span>Post Date:</span>
                                </Grid>
                                <Grid item>
                                    <span>Tams: 42069</span>
                                </Grid>
                            </Grid>


                        </Grid>

                        <Grid container>

                        </Grid>

                    </CardContent>
                </CardActionArea>

                <Grid container justify={'space-around'} style={cardMargin}>
                    <Grid item>
                        <Button>
                            See More
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button>
                            Share
                        </Button>
                    </Grid>
                </Grid>
            </Card>
        </div>
    );

}

export default PostContainer2;