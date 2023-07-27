import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import logo from '../images/logo.png'
import { Link } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { actionGetAllMovie,actionGetMovieSearch } from "../redux/action/movieAction";
const NavBar = () => {

  const dispatch = useDispatch();

  const onSearch = (word) => {
    search(word)
  }

  //to search in api
  const search = async (word) => {
    if (word === "") {
      // getAllMovies();
      dispatch(actionGetAllMovie);
    } else {
      dispatch(actionGetMovieSearch(word));
      // const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=52ef927bbeb21980cd91386a29403c78&query=${word}&language=ar`)
      // setMovies(res.data.results)
      // setpageCount(res.data.total_pages)
    }
  }


  return (
    <div className="nav-style w-100">
      <Container>
        <Row className="pt-2 ">
          <Col xs="2" lg="1">
            <a href="/">
              <img className="logo" src={logo} alt="dfs" />
            </a>
          </Col>
          <Col xs="10" lg="11" className=" d-flex align-items-center">
            <div className="search  w-100">
              <i className="fa fa-search"></i>
              <input onChange={(e) => onSearch(e.target.value)} type="text" className="form-control" placeholder="ابحث" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NavBar;
