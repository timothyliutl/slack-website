import React, {useState} from 'react';
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import TextField from '@material-ui/core/TextField'

const SignUpPage = (props) =>{

    const paperStyle ={
        width:400,
        height:600,
        margin: 30,
        padding:30,
    }

    const textBoxStyle={
        width:250,
        margin:10
    }

    const [hovering, setHovering] = useState(false);

    const mouseEnter = () =>{
        setHovering(true);
    }
    const mouseLeave = () =>{
        setHovering(false);
    }

return(
<div>

<Paper style={paperStyle} elevation={hovering?6:2} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
    <Grid container alignItems={'center'} justify={'center'}>

        <Grid item>
            <Typography variant={'h3'}>Sign Up</Typography>
        </Grid>

    </Grid>
    <Grid container alignItems={'left'} direction={'column'} justify={'space-around'} style={{marginTop:50}}>
        <Grid item style={textBoxStyle}>
            <Typography variant={'h6'}>Username</Typography>
            <TextField variant={'outlined'}></TextField>
        </Grid>
        <Grid item style={textBoxStyle}>
            <Typography variant={'h6'}>Email</Typography>
            <TextField variant={'outlined'}></TextField>
        </Grid>
        <Grid item style={textBoxStyle}>
            <Typography variant={'h6'}>Password</Typography>
            <TextField variant={'outlined'}></TextField>
        </Grid>
        <Grid item style={textBoxStyle}>
            <Typography variant={'h6'}>Confirm Password</Typography>
            <TextField variant={'outlined'}></TextField>
        </Grid>

    </Grid>
    
</Paper>

</div>
);

}

export default SignUpPage;