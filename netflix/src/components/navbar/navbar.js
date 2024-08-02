import React from 'react'
import "../navbar/navbar.css"
import 'boxicons/css/boxicons.min.css';


function NavBar() {
    return (
        <div className='navbar'>
            <div>
                <img  src='https://wallpapers.com/images/hd/netflix-logo-redon-black-l2sdc7dpfo35m127.png' alt='Netflix-Logo' className='logo' />
                <div className='navbartitle'>
                <a href="">TV Shows</a>
                <a href="">Movies</a>
                <a href="">Recently Added</a>
                <a href="">MyList</a>

                </div>
            </div>
            <div className='searchicon'>
                <i className='bx bx-search' id='searchicon'></i>
                
            </div>

        </div>
    )
}

export default NavBar
