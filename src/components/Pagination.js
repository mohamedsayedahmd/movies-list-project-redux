import React,{useEffect, useState} from 'react'
import { Pagination } from 'react-bootstrap'
import ReactPaginate from 'react-paginate';
import axios from 'axios';
import { useSelector,useDispatch } from 'react-redux';
import { actionGetPage } from '../redux/action/movieAction';
const PaginationComponent = () => {   // del {}
    const [pageCount, setpageCount] = useState(0);
    const dispatch = useDispatch();
    const pages = useSelector(state => state.redMovie.pageCount);

    useEffect(()=>{
        setpageCount(pages);
    })
  
    const getPageMovie = async (page) =>{
        dispatch(actionGetPage(page));
    }
    const handlePageClick = (data) => {
        getPageMovie(data.selected + 1)
    }
    return (
        <ReactPaginate
            breakLabel="..."
            nextLabel="التالى"
            onPageChange={handlePageClick}
            marginPagesDisplayed={2}
            pageRangeDisplayed={2}
            pageCount={pageCount}
            previousLabel="السابق"
            containerClassName={"pagination justify-content-center p-3"}
            pageClassName={"page-item"}
            pageLinkClassName={"page-link"}
            previousClassName={"page-item"}
            nextClassName={"page-item"}
            previousLinkClassName={"page-link"}
            nextLinkClassName={"page-link"}
            breakClassName={"page-item"}
            breakLinkClassName={"page-link"}
            activeClassName={"active"}
        />
    )
}

export default PaginationComponent
