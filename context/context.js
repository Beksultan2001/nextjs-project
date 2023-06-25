'use client';
import { createContext, useState,useReducer} from "react";
import { movieReducer } from "@/components/Reducer";

export const Message_data = createContext(null);

function Context({ children }) {
    const [message, setMessage] = useState('test');
    const [movies, setMovies] = useState([]);
    const [genres, setGenres] = useState([]);
    const [cinemaId, setCinemaId] = useState('');
    const [allMovies, setAllMovies]=useState([]);
    const [genreFilter, setGenreFilter]=useState('');
    const [titleFilter, setTitleFilter]=useState('');
    const [state, dispatch] = useReducer(movieReducer, {});
    
    return (
      <Message_data.Provider value={{ message, setMessage,genres,setGenres,movies,setMovies,cinemaId,setCinemaId,setAllMovies,allMovies,genreFilter,setGenreFilter,titleFilter,setTitleFilter,state,dispatch}}>
        {children}
      </Message_data.Provider>
    );
  }

export default Context;