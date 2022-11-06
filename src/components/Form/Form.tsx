import React from 'react';
import { Typography, Button, Grid, Box } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import { useStyles, InputField } from './styles';


const Forms = () => {
    const {classes} = useStyles();

    return (
        <Box component="div" style={{ height: "100vh" }}>
            <Grid container justifyContent="center">
                <Box component="form" className={classes.form}>
                    <Typography variant="h5" className={classes.heading}>
                        Contact Me...
                    </Typography>
                    <InputField
                        fullWidth={true}
                        label="Name"
                        variant="outlined"
                        inputProps={{ style: { color: 'white' } }}
                        margin="dense"
                        size="medium"
                    />
                    <br />
                    <InputField
                        fullWidth={true}
                        label="Your Email"
                        variant="outlined"
                        inputProps={{ style: { color: 'white' } }}
                        margin="dense"
                        size="medium"
                    />
                    <br />
                    <InputField
                        fullWidth={true}
                        label="Say Something..."
                        variant="outlined"
                        inputProps={{ style: { color: 'white' } }}
                        margin="dense"
                        size="medium"
                    />
                    <Button className={classes.button} variant="outlined" fullWidth={true} endIcon={<SendIcon />}>
                        Contact Me
                    </Button>
                </Box>
            </Grid>
        </Box>
    )
}

export default Forms