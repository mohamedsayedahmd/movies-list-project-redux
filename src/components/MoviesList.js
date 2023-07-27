import React,{useEffect,useState} from "react";
import { Row, Card, Col } from "react-bootstrap";
import CardMovie from "./CardMovie";
import PaginationComponent from './Pagination'
import { useSelector,useDispatch } from "react-redux";
import { actionGetAllMovie } from "../redux/action/movieAction";
const MoviesList = () => {

  const [movies, setMovies] = useState([])
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionGetAllMovie())
  }, [])// here that data we bring it :) and now we use the useSelector to handle that.

  const dataMovies = useSelector(state => state.redMovie.movies);
  
  useEffect(()=>{
    setMovies(dataMovies);
  },[dataMovies])


  return (
    <Row className="mt-3">
      {movies.length >= 1 ? (movies.map((mov) => {
        return (<CardMovie key={mov.id} mov={mov} />)
      })) : <h2 className="text-center p-5">لا يوجد افلام...</h2>}

      {movies.length >= 1 ? (<PaginationComponent />) : null}

    </Row>
  );
};

export default MoviesList;
