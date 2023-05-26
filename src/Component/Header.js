import React from 'react'
import { Link } from 'react-router-dom'
import { setTheme, removeTheme } from '../Store/Actions/themeActions'
import { useDispatch } from 'react-redux'

const Header = () => {
    const dispatch = useDispatch()
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