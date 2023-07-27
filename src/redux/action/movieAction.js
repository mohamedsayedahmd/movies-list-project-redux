import axios from "axios"
import { AllMOVIES } from "../types/moviesTypes";


export const actionGetAllMovie = () =>{
    return {type:AllMOVIES , data:[1,2,3,4],pages: 0}
}






// const getAllMovies = async () => {
//   const res = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=52ef927bbeb21980cd91386a29403c78&language=ar")
//   setMovies(res.data.results)
//   setpageCount(res.data.total_pages)
// }
