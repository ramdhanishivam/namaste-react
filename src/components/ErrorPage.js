import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const { error } = useRouteError();
    console.log(error);
    return (
        <div>
            <h1>404 - Not Found</h1>
            <p>{error.message}</p>
            <p>{error.status}</p>
        </div>
    );
};

export default ErrorPage;