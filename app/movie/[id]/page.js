'use client'
import React,{useEffect, useState,useContext} from 'react'
import Http from '../../../api/Http';
import Image from 'next/image';
import styles from '../../../styles/page.module.css';
import Comment from '@/components/Comment';
import Loader from '@/components/Loader';
import { Message_data } from '@/context/context';


function SingleMovie({ params }) {

  const {state,dispatch}=useContext(Message_data);
  const [movieInfo,setMovieInfo]=useState({});
  const [loader,setLoader]=useState(false);
  const [comments,setComments]=useState([]);
  
  const fetchData= async ()=> {
    const getMovie = await Http.getSingleMovie(params.id);
    const getComments = await Http.getComments(params.id);
    setComments(getComments.data);
    setMovieInfo(getMovie.data);
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
        <main style={{padding: '24px 32px',background: '#E0E0E0',minHeight: '100vh'}}>
        <div style={{ display: 'flex',background: 'white',borderRadius: '8px',width: '100%',padding: '24px'}}>
          <Image  src={movieInfo.posterUrl} alt="My Image" width={400} height={500} />
          <div style={{marginLeft: '32px',width: '100%'}}>
            <div style={{display: 'flex',justifyContent: 'space-between',width: '100%'}}>
              <h3 style={{fontSize: '32px'}}>{movieInfo.title}</h3>
              <div className={styles.movie_items}>
                <button className={!(state[movieInfo.id] ? state[movieInfo.id].count:0) ? styles.btn_minus : styles.btn_add} onClick={() => dispatch({ type: 'DECREMENT', movie: movieInfo})}>-</button>
                <p style={{color: 'black'}}>{state[movieInfo.id] ? state[movieInfo.id].count:0}</p>
                <button className={(Object.values(state).reduce((a, b) => a + (b?.count || 0), 0)) >= 30 ? styles.btn_minus : styles.btn_add} onClick={() => dispatch({ type: 'INCREMENT', movie: movieInfo})}>+</button>
              </div>
            </div>
            <div style={{marginTop: '24px',fontSize: '20px'}}>
              <strong>Жанр: </strong>{movieInfo.genre}
            </div>
            <div style={{marginTop: '24px',fontSize: '20px'}}>
              <strong>Год выпуска: </strong>{movieInfo.releaseYear}
            </div>
            <div style={{marginTop: '24px',fontSize: '20px'}}>
              <strong>Рейтинг: </strong>{movieInfo.rating}
            </div>
            <div style={{marginTop: '24px',fontSize: '20px'}}>
              <strong>Режиссер: </strong>{movieInfo.director}
            </div>
            <div style={{marginTop: '32px',fontSize: '20px'}}>
              <strong style={{display: 'block',marginBottom: '16px'}}>Описание: </strong>
                <p style={{fontSize: '16px',lineHeight: '24px'}}>
                  {movieInfo.description}
                </p>
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
