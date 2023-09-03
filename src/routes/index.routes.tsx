import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import OurStory from "../pages/OurStory";

export default function Outlet() {
    const routes = [
        {
            name: 'Home',
            path: '/',
            element: <Home />
        },
        {
            name: 'Our story',
            path: '/about',
            element: <OurStory />
        }
    ]

    return (
        <Routes>
            {
                routes.map((route, index) => (
                    <Route key={index} path={route.path} element={route.element} />
                ))
            }
        </Routes>
    )
}