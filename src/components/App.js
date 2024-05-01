import React from "react";
import ReactDOM from "react-dom/client";
import "./css/App.css";
import { Header } from "./Header";
import { Body } from "./Body";
import { Footer } from "./Footer";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import { AboutUs } from "./AboutUs";
import { ContactUs } from "./ContactUs";
import ErrorPage from "./ErrorPage";

export const styleHeader = {
    backgroundColor: "lightblue",
};


const App = () => {
    return (
        <div className="app-component">
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element: <AboutUs />,
            },
            {
                path: "/contact",
                element: <ContactUs />,
            }
        ]
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);