import React, { useEffect, useState } from 'react'
import "../banner/banner.css"
import axios from '../../axios'
import { API_KEY, image_url } from '../../constant'
function Banner() {
    const [movie, setMovie] = useState([])
    const [currentMovie, setcurrentMovie] = useState(0)
    useEffect(() => {

        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response) => {
            console.log(response.data.results[0]);
            setMovie(response.data.results.slice(0,5));
            setcurrentMovie(0)
        })

    }, [])
    useEffect(() => {
        const interval = setInterval(() => {
            if (movie.length > 0 ) {
                
                setcurrentMovie((prevIndex) => (prevIndex + 1) % movie.length)
            }
        }, 5000)

        return () => clearInterval(interval)
    }, [movie])


    const swipe = (direction) => {
        if (direction === 'right') {
          setcurrentMovie((prevIndex) => (prevIndex + 1) % movie.length);
        } else if (direction === 'left') {
          setcurrentMovie((prevIndex) => (prevIndex - 1 + movie.length) % movie.length);
        }
      };
    const currentmovie = movie[currentMovie]

    return (
        <div
            className='banner' >
            <div
                style={{ backgroundImage: `url(${currentmovie ? image_url + currentmovie.backdrop_path : ''})` }}
                className='bannerimage'>
                <div className='fade'>

                    <div className='content'>
                        <h1>{currentmovie ? currentmovie.title == null ? "No Title" : currentmovie.title : ""}</h1>
                        <h4>{currentmovie ? currentmovie.overview : ''} </h4>
                        <div className='buttondiv'>
                            <div className='button' id='btn1'><i class='bx bx-play' ></i><p>Play</p></div>
                            <div className='button' id='btn2'><i class='bx bx-plus' ></i><p>MyList</p></div>
                        </div>
                    </div>
                <div className='swipebuttonright' onClick={()=>swipe('right')}><i class='bx bx-chevron-right' ></i></div>
                <div className='swipebuttonleft' onClick={()=>swipe('left')} ><i class='bx bx-chevron-left' ></i></div>


                </div>

            </div>
        </div>
    )
}

export default Banner
