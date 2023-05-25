import React from 'react'
import { useSelector } from 'react-redux';
// Component.
import Header from '../Component/Header';

const About = () => {
    const theme = useSelector(state => state.theme)
    console.log("About.js theme =>", theme);
    return (
        <>
            <Header />
            <div style={{ color: "black", background: theme }} >About</div>
        </>
    )
}

export default About;