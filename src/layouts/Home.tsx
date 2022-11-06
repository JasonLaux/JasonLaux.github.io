import * as React from 'react';
import Profile from '../components/Profile/Profile';
// import { useFooter } from './AppLayout';
// import { useEffect } from 'react';

export default function Home() {

    // const [, setFooter] = useFooter();

    // useEffect(
    //     () => {
    //         setFooter({footerState: false})
    //         return () => setFooter({footerState: true})
    //     }
    // )


    return (
        <React.Fragment>
           <Profile/>
        </React.Fragment>
    )
};