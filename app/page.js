'use client';
import { useState,useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import styles from '../styles/page.module.css';
import Movie from '../components/Movie';
import Http from '../api/Http';
import { useContext } from "react";
import { Message_data } from "../context/context";


function Page() {

  const { allMovies, movies,setMovies,setGenres,cinemaId,setAllMovies,genreFilter,titleFilter} = useContext(Message_data);

  const [loader,setLoader]=useState(true);

  const fetchData = async () => {
    const getList = await Http.getMovies(cinemaId);

    //get genres
    let genres=new Set;
    getList.data.forEach((t) => {
      genres.add(t.genre);
    });
    
    setGenres(Array.from(genres).map((t,idx) => {
      return {name: t,id: idx}
    }));
    setMovies(getList.data);
    setAllMovies(getList.data);
    setLoader(false);

  }

  useEffect(() => {
    fetchData();
  }, [cinemaId]);

  useEffect(() => {
      let newList=allMovies.slice(0);
      if (genreFilter.length && genreFilter != 'Не выбран'){
        newList=newList.filter(movie =>{
          return  movie.genre===genreFilter;
        });
      }
      if (titleFilter.length){
        newList=newList.filter(movie =>{
          return movie.title.toLowerCase().includes(titleFilter.toLowerCase())
        });
      }
      setMovies(newList);
  },[genreFilter,titleFilter,allMovies]);

  return (
    <main className={styles.main}>
      <Sidebar />
      <section>
        {loader ? (
          <h1 style={{display: 'flex',justifyContent: 'center',alignItems: 'center'}}>Загружается...</h1>
        ) : (
          movies.map((t, idx) => {
            return(
              <Movie data={t} key={idx} />
            )
          })
        )}
      </section>
    </main>
  )
}

export default Page;
