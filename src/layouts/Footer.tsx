import { Box, Typography, Link } from "@mui/material" 
import * as React from 'react';
function Copyright() {

    return (
      <Typography variant="body2" color="#e3f2fd" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
}


export default function Footer(){

    return (
        <>
            <Box sx={{ bgcolor: 'transparent', p: 6 }}>
                <Typography variant="h6" align="center" gutterBottom color="#e3f2fd">
                    Footer
                </Typography>
                <Typography
                    variant="subtitle1"
                    align="center"
                    color="#e3f2fd"
                    component="p"
                >
                    Something here to give the footer a purpose!
                </Typography>
                <Copyright />
            </Box>
        </>    
    )
}