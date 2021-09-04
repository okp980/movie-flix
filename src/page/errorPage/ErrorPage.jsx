import React from 'react'
import { Link } from 'react-router-dom'
import './Error.css'

const ErrorPage = () => {
    return (
        <section className="error">
            <h1>404</h1>
            <p>This Page Does Not Exit</p>
            <Link to="/" className="btn">Go Home</Link>
        </section>
    )
}

export default ErrorPage
