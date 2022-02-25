import React from 'react'
import './header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='header'>
        <div className='headerIcon'>
            <Link to="/">
                LOGO
            </Link>
        </div>
        <div className='headerSearch'>
            <form>
                <input type="search" name="" id="" />
                <button type='submit'>BUSCAR</button>
            </form>
        </div>
        <div className='headerMenu'>MENU</div>
    </div>
  )
}

export default Header