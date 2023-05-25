import React from 'react'
import { setTheme, removeTheme } from '../Store/Actions/themeActions'
import { useDispatch } from 'react-redux'

const Header = () => {
    const dispatch = useDispatch()
    return (
        <div className='d-flex px-5 py-2 bg-dark border justify-content-between'>
            <div onClick={() => dispatch(setTheme('red'))}
                style={{
                    background: 'red',
                    width: '50px',
                    height: '50px'
                }}></div>

            <div onClick={() => dispatch(setTheme('green'))}
                style={{
                    background: 'green',
                    width: '50px',
                    height: '50px'
                }}></div>

            <div onClick={() => dispatch(removeTheme())}
                style={{
                    background: 'blue',
                    width: '50px',
                    height: '50px'
                }}></div>
        </div>
    )
}

export default Header;