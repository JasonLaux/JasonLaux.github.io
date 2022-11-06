import { useState } from 'react';
import * as React from 'react';
import { AppBar, Toolbar, ListItem, ListItemIcon, IconButton, ListItemText, Avatar, Divider, List, Typography, Box} from "@mui/material";
import { Dehaze } from '@mui/icons-material';
import Drawer from '@mui/material/Drawer';
import { useNavigate} from "react-router-dom";
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { LinkedIn, GitHub } from '@mui/icons-material';
import { AssignmentInd, Home, Apps, ContactMail } from '@mui/icons-material';

const menuItems = [
    {
        listIcon: <Home/>,
        listText: "Home",
        listPath: '/'
    },
    {
        listIcon: <AssignmentInd/>,
        listText: "Resume",
        listPath: '/resume'
    },
    {
        listIcon: <Apps/>,
        listText: "Project",
        listPath: '/project'
    },
    {
        listIcon: <ContactMail/>,
        listText: "Contact",
        listPath: '/contact'
    }
]

const Navbar = () => {

    let navigate = useNavigate();

    const [state, setSliderState] = useState({
        left: false
    });

    // () => (event) => {}
    const toggleSlider = (open: boolean) => () =>  {
        setSliderState({ ...state, left: open });
    };
    // theme required to test
    const sideList = () => (
        <Box onClick={toggleSlider(false)} 
            sx={{width: 250, 
                bgcolor: 'primary.light',
                height: "100%"}}  
            component="div">
            <Avatar src={"/logo192.png"} alt="jiexin" 
                sx={{display: 'block',
                margin: '0.5rem auto',
                width: (theme) => theme.spacing(13),
                height: (theme) => theme.spacing(13)}}
            />
            <Divider />
            <List>
                {menuItems.map((isItem, key) => (
                    <ListItem button key={key} onClick={()=>{isItem.listText === 'Resume'? window.location.href = 'https://1drv.ms/b/s!AjiLLRtOufObiA6SVloUSqIlbqsS?e=cdCjzZ' : navigate(isItem.listPath)}}>
                        {/* <ListItemIcon className={classes.listItem}><Home/></ListItemIcon> */}
                        <ListItemIcon sx={{color: 'primary.dark'}}>{isItem.listIcon}</ListItemIcon>
                        <ListItemText
                            primary={<Typography variant="h6" style={{ fontFamily: 'Titillium Web'}}>{isItem.listText}</Typography>} />
                    </ListItem>
                ))}
            </List>
        </Box>
    )

    const Footer = () => {
        return (
            <BottomNavigation sx= {{width: "auto", bgcolor: 'primary.light'}}>
                <BottomNavigationAction
                    style={{ padding: 0 }}
                    icon={<LinkedIn />}
                    href="https://www.linkedin.com/in/jiexinlau"
                />
                <BottomNavigationAction                  
                    style={{ padding: 0 }}
                    icon={<GitHub />}
                    href="https://github.com/JasonLaux"
                />
            </BottomNavigation >
        )
    }

    return (
        <>
            <Box component="nav">
                <AppBar position="fixed" sx={{bgcolor: 'transparent', boxShadow: 'none'}}>
                    <Toolbar>
                        <IconButton onClick={toggleSlider(true)}>
                            <Dehaze sx={{color: '#283593'}} />
                        </IconButton>
                        <Drawer anchor="left" open={state.left} onClose={toggleSlider(false)}>
                            {sideList()}
                            <Footer />
                        </Drawer>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}

export default Navbar