import React from 'react'
import { useSelector } from 'react-redux';
// Component.
import Header from '../Component/Header';

const Contact = () => {
    const theme = useSelector(state => state.themeReducer.theme)
    console.log("Contact.js theme =>", theme);
    return (
        <>
            <Header />
            <div className='screen-layout' style={{ background: theme }} >Contact</div>
        </>
    )
}

export default Contact;