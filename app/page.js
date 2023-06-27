'use client';
import { useState,useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import styles from '../styles/Page.module.css';
import Movie from '../components/Movie';
import Http from '../api/Http';
import { useContext } from "react";
import { Message_data } from "../context/context";
import Loader from '@/components/Loader';


function Page() {

  const { allMovies, movies,setMovies,setGenres,cinemaId,setAllMovies,genreFilter,titleFilter} = useContext(Message_data);

  const [loader,setLoader]=useState(true);

  const fetchData = async () => {
    const getList = await Http.getMovies(cinemaId);
    console.log(getList,'list');
    //get genres
    let genres=new Set;
    getList.forEach((t) => {
      genres.add(t.genre);
    });
    
    setGenres(Array.from(genres).map((t,idx) => {
      return {name: t,id: idx}
    }));
    setMovies(getList);
    setAllMovies(getList);
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
          <Loader/>
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
