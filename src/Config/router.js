import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "../Screens/Home";
import About from "../Screens/About";
import Contact from "../Screens/Contact";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/about",
        element: <About />,
    },
    {
        path: "/contact",
        element: <Contact />,
    },
]);

export default function Router() {
    return (
        <RouterProvider router={router} />
    )
}