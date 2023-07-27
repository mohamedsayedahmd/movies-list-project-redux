import axios from "axios"
import { AllMOVIES,MovieAPI } from "../types/moviesTypes";

export const actionGetAllMovie = () =>{

    return async(adispatch) => {// adispatch mot3er or dispatch call it
        const res = await axios.get(MovieAPI);
        console.log(res.data);
        adispatch({type:AllMOVIES, data:res.data.results, pages: res.data.total_pages});
        
    }                

}






// const getAllMovies = async () => {
//   const res = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=52ef927bbeb21980cd91386a29403c78&language=ar")
//   setMovies(res.data.results)
//   setpageCount(res.data.total_pages)
// }
