import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setUser, removeUser } from '../Store/Actions/userActions'
import { setTheme, removeTheme } from '../Store/Actions/themeActions'

const Header = () => {
    const userDoc = "Muhammad Shahzaib";
    const dispatch = useDispatch()
    const isUser = useSelector(state => state.userReducers.user)
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">REDUX</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </li>
                        </ul>
                        <div className='border p-2 me-2 rounded'>
                            <span className='bg-light rounded p-2 mx-4'>{isUser ? isUser : "No User"}</span>
                            {!isUser ?
                                <button className="btn btn-primary" onClick={() => dispatch(setUser(userDoc))}>LOGIN</button>
                                :
                                <button className="btn btn-primary" onClick={() => dispatch(removeUser())}>LOGOUT</button>
                            }
                        </div>
                        <div className="d-flex justify-content-between align-items-center bg-light p-2 w-25 rounded">
                            <button className="btn btn-danger rounded-circle" onClick={() => dispatch(setTheme('#dc3545'))} >R</button>
                            <button className="btn btn-success rounded-circle" onClick={() => dispatch(setTheme('#198754'))} >G</button>
                            <button className="btn btn-primary rounded-circle" onClick={() => dispatch(setTheme('#0d6efd'))} >B</button>
                            <button className="btn btn-dark rounded-circle" onClick={() => dispatch(removeTheme())} >D</button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header;