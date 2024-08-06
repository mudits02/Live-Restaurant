import React from 'react';
import { useRouteError } from 'react-router-dom';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    const err = useRouteError(); //dynamically finds the errors that is taking place on the page
    console.log(err);
    return (
        <div className="error-container">
            <h1>{err.status}</h1>
            <h2>Oops! {err.error.message}</h2>
            <p>The page you are looking for doesn't exist or has been moved.</p>
            <Link to="/" className="home-link">Go Back Home</Link>
        </div>
    );
}

export default ErrorPage;
