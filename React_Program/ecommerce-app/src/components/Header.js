import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <header className='header'>
            <Link to="/" style={{ textDecoration: 'none', color: '#fff' }}>
                <h1>Techflix store</h1>
            </Link>

            <Link to='/logout'>
                <button className='logout-button' >Logout</button></Link>
        </header>
    )
}
