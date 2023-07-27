
import {createStore} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from '../reducer/rootReducer';
// import {AllMOVIES} from './moviesTypes/types'



export const store = createStore(rootReducer,composeWithDevTools());

// const [movies, setMovies] = useState([])
// const [pageCount, setpageCount] = useState(0)
// //get all movies by axios 
// const getAllMovies = async () => {
//   const res = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=52ef927bbeb21980cd91386a29403c78&language=ar")
//   setMovies(res.data.results)
//   setpageCount(res.data.total_pages)
// }
