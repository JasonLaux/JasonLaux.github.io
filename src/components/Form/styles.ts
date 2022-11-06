import { TextField } from '@mui/material';
import { makeStyles, withStyles } from 'tss-react/mui';

import { createTheme } from '@mui/material/styles';

const main_theme = createTheme({
    palette: {
        primary: {
            light: '#5CDB95',
            main: '#379683',
            dark: '#05386B',
        },
        secondary: {
            light: '#fff',
            main: '#EDF5E1',
            dark: '#8EE4AF',
        },
    },
});


export const useStyles = makeStyles()({
    form: {
        top: '50%',
        left: '50%',
        transform: "translate(-50%, -50%)",
        position: 'absolute',
    },
    heading: {
        color: main_theme.palette.primary.light,
        textAlign: 'center',
        textTransform: 'uppercase'
    },
    button: {
        marginTop: '1rem',
        color: main_theme.palette.primary.light,
        borderColor: main_theme.palette.primary.light
    }
});

export const InputField = withStyles(TextField,() => ({
    root: {
        "& label.Mui-focused": {
            color: main_theme.palette.primary.light,
        },
        "& label": {
            color: main_theme.palette.primary.light
        },
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                borderColor: main_theme.palette.primary.light
            },
            "&:hover fieldset": {
                borderColor: main_theme.palette.primary.light
            },
            "& .Mui-focused fieldset": {
                borderColor: main_theme.palette.primary.light
            }
        }
    }
}));