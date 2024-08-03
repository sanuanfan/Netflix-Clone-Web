import React, { useEffect , useState} from 'react'
import "../banner/banner.css"
import axios from '../../axios'
import {API_KEY  , image_url} from '../../constant'
function Banner() {
    const [movie, setMovie] = useState()
    useEffect(() => {
      
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response) =>{
        console.log(response.data.results[0]);
        setMovie(response.data.results[0])
    })
      
    }, [])
    
    return (
        <div 
       
        className='banner' >
            <div 
             style={{backgroundImage: `url(${ movie ? image_url+movie.backdrop_path : ''})`}}
            className='bannerimage'>
                <div className='content'>
                    <h1>{movie ? movie.title : ''}</h1>
                    <h4>{movie ? movie.overview : ''} </h4>
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
