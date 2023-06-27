'use client'
import React,{useEffect, useState,useContext} from 'react'
import Http from '../../../api/Http';
import Image from 'next/image';
import styles from '../../../styles/SingleMovie.module.css';
import Comment from '@/components/Comment';
import Loader from '@/components/Loader';
import { Message_data } from '@/context/context';


function SingleMovie({ params }) {

  const {state,dispatch,t}=useContext(Message_data);
  const [movieInfo,setMovieInfo]=useState({});
  const [loader,setLoader]=useState(false);
  const [comments,setComments]=useState([]);
  
  const fetchData= async ()=> {
    const getMovie = await Http.getSingleMovie(params.id);
    const getComments = await Http.getComments(params.id);
    setComments(getComments);
    setMovieInfo(getMovie);
    setLoader(true);
  }

  useEffect(function(){
    fetchData();
  },[]);

  if (!loader){
    return (
      <Loader />
    )
  }

  return (
      <main className={styles.main}>
        <div className={styles.container}>
          <Image src={movieInfo.posterUrl} alt="Movie Poster" width={400} height={500} />
          <div className={styles.movieDetails}>
            <div className={styles.titleRow}>
              <h3 className={styles.title}>{movieInfo.title}</h3>
              <div className={styles.movie_items}>
                <button className={!(state[movieInfo.id] ? state[movieInfo.id].count:0) ? styles.btn_minus : styles.btn_add} onClick={() => dispatch({ type: 'DECREMENT', movie: movieInfo})}>-</button>
                <p style={{color: 'black'}}>{state[movieInfo.id] ? state[movieInfo.id].count:0}</p>
                <button className={(state[movieInfo.id] ? state[movieInfo.id].count:0) >= 30 ? styles.btn_minus : styles.btn_add} onClick={() => dispatch({ type: 'INCREMENT', movie: movieInfo})}>+</button>
              </div>
            </div>
            <div className={styles.movieInfo}>
              <strong>Жанр: </strong>{t(movieInfo.genre)}
            </div>
            <div className={styles.movieInfo}>
              <strong>Год выпуска: </strong>{movieInfo.releaseYear}
            </div>
            <div className={styles.movieInfo}>
              <strong>Рейтинг: </strong>{movieInfo.rating}
            </div>
            <div className={styles.movieInfo}>
              <strong>Режиссер: </strong>{movieInfo.director}
            </div>
            <div className={styles.description}>
              <strong>Описание: </strong>
              <p>{movieInfo.description}</p>
            </div>
          </div>
        </div>
        {comments.map((t) => {
          return (
            <Comment data={t} />
          )
        })}
      </main>
    )
  
}

export default SingleMovie
