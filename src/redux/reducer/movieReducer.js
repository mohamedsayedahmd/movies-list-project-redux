import { AllMOVIES } from "../types/moviesTypes";


const intalValue = {movies:[],pageCount:0};

export const MovieReducer = (state=intalValue,action) =>{
    switch(action.type){
        case AllMOVIES: 
            return {movies:action.data,pageCount:action.pages}
        default: return state;
    }
}