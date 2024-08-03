import axios from 'axios' 
import {Base_url} from '../src/constant'

const instance = axios.create({
    baseURL:Base_url
    
})

export default instance