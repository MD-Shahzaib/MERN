// Router-Components.
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// Screens.
import Home from "../Screens/Home";
import About from "../Screens/About";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/about",
        element: <About />,
    }
]);

export default function Router() {
    return (
        <RouterProvider router={router} />
    )
}





/*
import { useEffect, useState } from 'react'
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route, Navigate } from "react-router-dom"
import Login from "../views/Login"
import Dashboard from "../views/Dashboard"
import Profile from "../views/Profile"
import Contact from "../views/Contact"
import Detail from '../views/Detail'

// const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <Dashboard />,
//     },
//     {
//         path: "/profile",
//         element: <Profile />,
//     },
//     {
//         path: "/contact",
//         element: <Contact />,
//     },
//     {
//         path: "/detail/:postId",
//         element: <Detail />,
//     },
// ]);

export default function Router() {
    const [user, setUser] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setUser(true)
        }, 500)

        // onAuthStateChanged(auth, (user) => {
        //     setUser(!!user)
        // })
    }, [])

    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route path="/" element={
                    <ProtectedRoute
                        user={user}
                        route={<Dashboard />}
                        navigateTo='/login' />}
                />
                <Route path="/login" element={
                    <ProtectedRoute
                        user={!user}
                        route={<Login />}
                        navigateTo='/' />}
                />
                <Route path="/profile" element={
                    <ProtectedRoute
                        user={user}
                        route={<Profile />}
                        navigateTo='/login' />}
                />
                <Route path="/contact" element={<Contact />} />
                <Route path="/detail/:postId" element={<Detail />} />
            </>
        )
    )

    return <RouterProvider router={router} />
}

function ProtectedRoute({ user, route, navigateTo }) {
    return user ? route : <Navigate to={navigateTo} replace={true} />
}

// 1. Basic Routing
// 2. Programmatically Routing (useNavigate(), navigate('/dashboard'))
// 3. Back janay ka tariqa (navigate(-1))
// 4. Dynamic Routing ('/detail/:postId')
// 5. Protected Routing
*/
