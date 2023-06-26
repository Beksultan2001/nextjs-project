import React,{useState} from 'react';
import Image from 'next/image';
import styles from '../styles/page.module.css';
import Link from "next/link";
import { useContext } from "react";
import { Message_data } from '@/context/context';
import Close from '@/public/icons/Close';
import Modal from './Modal';


function Movie({data,handleRemove}) {

  const {title,posterUrl,genre,id}=data;
  const {state,dispatch,t}=useContext(Message_data);

  const [showModal,setShowModal]=useState(false);

  const handleRemoveItem=()=>{
    dispatch({ type: 'REMOVE', movie: data})
    setShowModal(false);
  }

  return (
    <React.Fragment>
      <div className={styles.single_movie}>
          <Image  src={posterUrl} alt="My Image" width={100} height={120} />
          <div style={{marginLeft: 24,width: '100%'}}>
            <div style={{display: 'flex',justifyContent: 'space-between',width: '100%'}}>
              <Link href={`/movie/${id}`} passHref>
                <h3 style={{fontWeight: 600,color: 'black',fontSize: 20}}>{title}</h3>
              </Link>
              <div className={styles.movie_items}>
                <button className={!(state[id] ? state[id].count:0) ? styles.btn_minus : styles.btn_add} onClick={() => (handleRemove && (state[id] ? state[id]?.count:1) <= 1) ?  setShowModal(true) : dispatch({ type: 'DECREMENT', movie: data})}>-</button>
                <p style={{color: 'black'}}>{state[id] ? state[id].count:0}</p>
                <button className={(state[id] ? state[id].count:0)>= 30 ? styles.btn_minus : styles.btn_add}   onClick={() => dispatch({ type: 'INCREMENT', movie: data})}>+
                </button>
                {handleRemove && <span className={styles.removeItem} onClick={() => setShowModal(true)}><Close /></span>}
              </div>
            </div>
            <p style={{marginTop: 8,color: 'black',fontStyle: 'Italic'}}>{t(genre)}</p>
          </div>
      </div>
      <Modal show={showModal} onClose={setShowModal}>
            <p style={{fontSize: '16px'}}>Вы уверены, что хотите удалить билет?</p>
            <div style={{marginTop: '24px'}}>
                <button style={{ cursor: 'pointer',background: '#FF5500',color: 'white',borderRadius: '8px',padding: '10px 16px',border: 'none'}} onClick={handleRemoveItem}>
                    Да
                </button>
                <button style={{ cursor: 'pointer',marginLeft: '8px',color: '#FF5500',border: '1px solid #FF5500',borderRadius: '8px',padding: '10px 16px',background: 'white'}} onClick={() => setShowModal(false)}>
                    Нет
                </button>
            </div>
      </Modal>
    </React.Fragment>
  )
}

export default Movie