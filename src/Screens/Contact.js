import React from 'react'
import { useSelector } from 'react-redux';

const Contact = () => {
    const theme = useSelector(state => state.theme)
    console.log("Contact.js theme =>", theme);
    return (
        <div style={{ color: "black", background: theme }} >Contact</div>
    )
}

export default Contact;