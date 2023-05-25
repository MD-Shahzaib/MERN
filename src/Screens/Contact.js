import React from 'react'
import { useSelector } from 'react-redux';
// Component.
import Header from '../Component/Header';

const Contact = () => {
    const theme = useSelector(state => state.theme)
    console.log("Contact.js theme =>", theme);
    return (
        <>
            <Header />
            <div style={{ color: "black", background: theme }} >Contact</div>
        </>
    )
}

export default Contact;