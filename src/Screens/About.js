import React from 'react'
import { useSelector } from 'react-redux';

const About = () => {
    const theme = useSelector(state => state.theme)
    console.log("About.js theme =>", theme);
    return (
        <div style={{ color: "black", background: theme }} >About</div>
    )
}

export default About;