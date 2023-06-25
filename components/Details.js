'use client';
import React,{useState} from 'react'
import styles from '../styles/page.module.css';
import Expand from '@/public/icons/Expand';
import Collapsed from '@/public/icons/Collapsed';

function Details() {

    const [isOpen,setIsOpen]=useState(false);

  return (
    <details open={isOpen} className={styles.details}>
        <summary onClick={() => setIsOpen(!isOpen)} style={{listStyle: 'none',fontWeight: 600, display: 'flex',justifyContent: 'space-between',cursor: 'pointer', alignItems: 'center',fontSize: 24}}>Что такое Билетопоиск? <span className={styles.iconHandleOpen}>{isOpen ?<Collapsed style={{color: 'red'}}/> : <Expand /> }</span></summary>
        <p style={{marginTop: '16px'}}>Мы — крупнейший сервис о кино в рунете. На нем вы сможете посмотреть фильмы и сериалы, купить билеты в кино, узнать рейтинги популярных видео и интересные факты, поставить фильмам оценки, написать рецензии и дополнить описание фильмов.</p>
    </details>
  )

}

export default Details