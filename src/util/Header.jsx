import { faCartShopping, faEllipsisVertical, faSearch, faStore } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import { faUserCircle } from '@fortawesome/free-regular-svg-icons';

const Header = () => {
  return (
    <header>
        <nav className='flex items-center justify-start h-16 bg-white'>
            {/* LOGO */}
            <Link to={"#"} className='h-full ml-24'>
            <img src="https://st1.latestly.com/wp-content/uploads/2024/01/1-2-2.jpg" alt='logo' width='125' />
            </Link>

            {/* SEARCH BAR */}
            <div className='flex items-center h-10 w-1/2 ml-6 bg-indigo-50 rounded-md'>
            <button className='w-8'>
                <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
            </button>
                <input className='bg-indigo-50 text-indigo-300 h-8 w-full font-mono border-indigo-50
                border focus:outline-none rounded-md' type="text" placeholder='Search for Products, Brands and More'/>
            </div>

            {/* LINK BLOCK */}
            <div className=' ml-6 flex items-center w-96 '>
                {/* Login */}
                <Link className='flex items-center justify-center h-10 w-32 bg-transparent rounded-md hove hover:bg-blue-600' to={""}>
                    <FontAwesomeIcon icon={faUserCircle} className='h-6'></FontAwesomeIcon>
                    <a className='ml-3' href="">Login</a>
                </Link>

                {/* Cart */}
                <Link className='flex items-center justify-center ml-5 h-10 w-24 bg-transparent rounded-md' to={""}>
                    <FontAwesomeIcon icon={faCartShopping} className='h-5'></FontAwesomeIcon>
                    <a className='ml-2' href="">Cart</a>
                </Link>

                {/* Option for SELLER */}
                <Link className='flex items-center justify-center ml-5 h-10 w-48 bg-transparent rounded-md' to={""}>
                    <FontAwesomeIcon icon={faStore} className='h-5'></FontAwesomeIcon>
                    <a className='ml-2' href="">Become a Seller</a>
                </Link> 
            </div>

            {/* Other purpose */}
            <div className='ml-8 flex items-center h-16 w-4 bg-transparent rounded-md'>
            <Link className='flex items-center h-16 w-4 bg-transparent rounded-md' to={""}>
                    <FontAwesomeIcon icon={faEllipsisVertical} className='h-5'></FontAwesomeIcon>
                </Link>
            </div>
        </nav>
    </header>
  )
}

export default Header
