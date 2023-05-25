import React from 'react'
import { useSelector } from 'react-redux';
// Component.
import Header from '../Component/Header';

const Home = () => {

    const theme = useSelector(state => state.theme)
    console.log("home.js theme =>", theme);
    return (
        <>
            <Header />
            <div style={{ color: "black", background: theme }}>Home</div>
        </>
    )
}

export default Home;