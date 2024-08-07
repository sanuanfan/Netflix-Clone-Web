import React from 'react'
import "../navbar/navbar.css"
import 'boxicons/css/boxicons.min.css';


function NavBar() {
    return (
        <div className='navbar'>
            <div>
                <img  src='https://wallpapers.com/images/hd/netflix-logo-redon-black-l2sdc7dpfo35m127.png' alt='Netflix-Logo' className='logo' />
                <div className='navbartitle'>
                <button>TV Shows</button>
                <button>Movies</button>
                <button>Recently Added</button>
                <button>MyList</button>

                </div>
            </div>
            <div className='searchicon'>
                <i className='bx bx-search' id='searchicon'></i>
                
            </div>

        </div>
    )
}

export default NavBar
