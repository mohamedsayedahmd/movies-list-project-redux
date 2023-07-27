import axios from "axios"
import { AllMOVIES,MovieAPI } from "../types/moviesTypes";

export const actionGetAllMovie = () =>{
    return async(adispatch) => {// adispatch mot3er or dispatch call it
        const res = await axios.get(MovieAPI);
        console.log(res.data);
        adispatch({type:AllMOVIES, data:res.data.results, pages: res.data.total_pages});
    }                
}

export const actionGetMovieSearch = (word) =>{
    return async (dispatch)=>{
        const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=52ef927bbeb21980cd91386a29403c78&query=${word}&language=ar`)
        dispatch({type:AllMOVIES, data:res.data.results, pages: res.data.total_pages});
    }
}
export const actionGetPage = (page)=>{
    return async (dispatch)=>{
        const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=52ef927bbeb21980cd91386a29403c78&language=ar&page=${page}`)
        dispatch({type:AllMOVIES, data:res.data.results, pages: res.data.total_pages});
    }
}

