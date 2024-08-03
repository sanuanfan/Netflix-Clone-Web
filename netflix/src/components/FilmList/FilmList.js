import React, {useState,useEffect} from 'react'
import '../FilmList/FilmList.css'
import axios from '../../axios'
import {image_url} from '../../constant'


function FilmList(props) {
    const [movie, setMovie] = useState([])
    useEffect(() => {
        axios.get(props.url).then((response) =>{
            setMovie(response.data.results)
            
        })
     
    }, [])
    
    return (
        <div>
            <h3>{props.title}</h3>
            <div className='filmlist'>
                {movie.map((obj)=>

                <img src={`${image_url+ obj.poster_path}`} alt="" className='listimage' />
                
                )}
                

            </div>
        </div>
    )
}

export default FilmList
