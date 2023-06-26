'use client';
import { createContext, useState,useReducer} from "react";
import { movieReducer } from "@/components/Reducer";
import { translations } from "@/translation/translations";

export const Message_data = createContext(null);

function Context({ children }) {

    const [movies, setMovies] = useState([]);
    const [genres, setGenres] = useState([]);
    const [cinemaId, setCinemaId] = useState('');
    const [allMovies, setAllMovies]=useState([]);
    const [genreFilter, setGenreFilter]=useState('');
    const [titleFilter, setTitleFilter]=useState('');
    const [cinemaFilter, setCinemaFilter]=useState('');
    const [state, dispatch] = useReducer(movieReducer, {});
  

    const t = (key) => {
        return translations['ru'][key] || key;
    };

    
    return (
      <Message_data.Provider value={{t,genres,setGenres,movies,setMovies,cinemaId,setCinemaId,setAllMovies,allMovies,genreFilter,setGenreFilter,titleFilter,setTitleFilter,state,dispatch,cinemaFilter,setCinemaFilter}}>
        {children}
      </Message_data.Provider>
    );
  }

export default Context;