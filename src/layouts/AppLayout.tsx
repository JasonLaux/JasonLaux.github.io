import { Outlet } from "react-router-dom"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Footer } from '.';
import {CssBaseline} from '@mui/material';
import Navbar from "../components/NavBar/NavBar";
import ParticlesComponent from "../components/Particles/Particles";
import { useState } from "react";
import { useOutletContext } from "react-router-dom";

const theme = createTheme();

type ContextType = [footerState: boolean, setFooter: CallableFunction];

export default function AppLayout() {

    const [footerState, ] = useState(false);
    

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
                <ParticlesComponent/>
                <Navbar/>
            <main>
                <Outlet/>
            </main>
            {footerState && <Footer/>}

      </ThemeProvider>
    )
}

export function useFooter() {

    return useOutletContext<ContextType>();
}