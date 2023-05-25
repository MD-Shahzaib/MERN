import React from 'react'
import { useSelector } from 'react-redux';

const Home = () => {

    const theme = useSelector(state => state.theme)
    console.log("home.js theme =>", theme);
    return (
        <div style={{ color: "black", background: theme }}>Home</div>
    )
}

export default Home;