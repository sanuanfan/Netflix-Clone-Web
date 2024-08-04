import React, { useState, useEffect } from 'react'
import '../FilmList/FilmList.css'
import axios from '../../axios'
import { image_url, API_KEY } from '../../constant'
import YouTube from 'react-youtube'


function FilmList(props) {
    const [movie, setMovie] = useState([])
    const [videourl, setVideourl] = useState('')
    useEffect(() => {
        axios.get(props.url).then((response) => {
            setMovie(response.data.results)
            console.log(response.data.results);

        })

    }, [])
    const opts = {
        height: '390',
        width: '500',
        playerVars: {
            autoplay: 1,
        },
    };
    const playVideo = (id) => {
        console.log(id);
        axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response) => {
            console.log(response.data);
            if (response.data.results.length != 0) {
                setVideourl(response.data.results[0])

            } else {
                console.log('no id found')
            }
        }
        )



    }
    
    return (
        <div>
            <h3>{props.title}</h3>
            <div className='filmlist'
            >
                {movie.map((obj) =>

                    <img onMouseEnter={() => playVideo(obj.id)} onMouseLeave={()=>{setVideourl('')}} onClick={() => playVideo(obj.id)}
                    src={`${image_url + obj.poster_path}`} alt="" className='listimage' />

                )}


            </div>
            {videourl && <YouTube opts={opts} videoId={videourl.key} />}
        </div>
    )
}

export default FilmList
