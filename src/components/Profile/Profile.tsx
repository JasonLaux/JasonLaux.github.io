import React from 'react';
import { Avatar, Box, Typography, Grid} from "@mui/material";
import Typed from 'react-typed';
import { useStyles } from './styles';
import avatar from '../../assets/avatar.jpg';

const Profile = () => {

    const {classes} = useStyles();

    return (
        <>
            <Box className={classes.typedContainer} >
                <Grid container justifyContent="center">
                    <Avatar className={classes.avatar} src={avatar} alt="jiexin" />
                </Grid>
                <Typography className={classes.title} variant="h4"> 
                    <Typed strings={["Jason Liu"]} typeSpeed={40} showCursor={false}/>
                </Typography>
                <br />
                <Typography className={classes.subtitle} variant="h4">
                    <Typed strings={["Welcome to my website!", "I'm enthusiastic about solving hard problems with programming."]} typeSpeed={40} backSpeed={60} loop />
                </Typography>
            </Box>
        </>
    )
}

export default Profile