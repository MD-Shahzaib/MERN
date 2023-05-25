import React from 'react'
import { setTheme, removeTheme } from '../Store/Actions/themeActions'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

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
                        <div className="d-flex justify-content-between align-items-center">
                            <button className="btn btn-primary" onClick={() => dispatch(setTheme('red'))} ></button>
                            <button className="btn btn-primary" onClick={() => dispatch(setTheme('green'))} ></button>
                            <button className="btn btn-primary" onClick={() => dispatch(setTheme('blue'))} ></button>
                            <button className="btn btn-primary" onClick={() => dispatch(removeTheme())} ></button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header;