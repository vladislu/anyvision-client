import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header className="headerStyle">
            <Link to="/" style={{color: 'white', letterSpacing: '7px'}}>
                <h1>Search for iTunes</h1>
            </Link>
        </header>
    )
}
