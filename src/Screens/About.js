import React from 'react'
import { useSelector } from 'react-redux';
// Component.
import Header from '../Component/Header';

const About = () => {
    const theme = useSelector(state => state.themeReducer.theme)
    console.log("About.js theme =>", theme);
    return (
        <>
            <Header />
            <div className='screen-layout' style={{ background: theme }}>About</div>
        </>
    )
}

export default About;