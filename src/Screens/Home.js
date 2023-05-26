import React from 'react'
import { useSelector } from 'react-redux';
// Component.
import Header from '../Component/Header';

const Home = () => {

    const theme = useSelector(state => state.themeReducer.theme)
    console.log("home.js theme =>", theme);
    return (
        <>
            <Header />
            <div className='screen-layout' style={{ background: theme }}>Home</div>
        </>
    )
}

export default Home;