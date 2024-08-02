import React from 'react'
import "../banner/banner.css"
function Banner() {
    return (
        <div className='banner'>
            <div className='bannerimage'>
                <div className='content'>
                    <h1>Money Heist</h1>
                    <h4>Lorem ipsum dolor sit amet nsd ashdnd gdjwjd shdfns Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus fugiat consectetur rem in, ad, velit, nulla ab autem debitis aspernatur nostrum. Excepturi deleniti adipisci aut odio laboriosam a laudantium expedita. </h4>
                    <div className='buttondiv'>
                        <div className='button' id='btn1'><i class='bx bx-play' ></i><p>Play</p></div>
                        <div className='button'id='btn2'><i class='bx bx-plus' ></i><p>MyList</p></div>
                    </div>
                </div>
                <div className='fade'>
                    {/* <h3>Popular on Netflix</h3> */}
                </div>

            </div>
        </div>
    )
}

export default Banner
