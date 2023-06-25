import React, { useEffect, useState } from 'react';
import styles from '../styles/page.module.css';
import DropDown from './Dropdown';
import { useContext } from 'react';
import { Message_data } from "../context/context";
import Http from '../api/Http';

const debounce = (func, delay) => {
  let debounceTimer
  return function() {
      const context = this
      const args = arguments
          clearTimeout(debounceTimer)
              debounceTimer
          = setTimeout(() => func.apply(context, args), delay)
  }
}

function Sidebar() {

  const {genres,setCinemaId,setMovies,allMovies,setGenreFilter,setTitleFilter} = useContext(Message_data);
  const [cinemas,setCinemas]=useState([]);

  const fetchData = async () => {
    let getList = await Http.getCinemas();
    setCinemas(getList.data);
  }

  useEffect(function() {
    fetchData();
  },[]);

  const handleCinemaId=function (value){
    setCinemaId(value.id);
  };

  const handleGenres=function (value){
    if (value.name=='Не выбран'){
      setGenreFilter('');
      setMovies(allMovies);
      return;
    }
    const filteredMovies = allMovies.filter(movie =>{
      return movie.genre===value.name;
    });
    setGenreFilter(value.name);
    setMovies(filteredMovies);
  }


  const debouncedHandleTitle = debounce(function(value){
    setTitleFilter(value);
  }, 1000);

  return (
    <section className={styles.sidebar}>
      <h1>Фильтр поиска</h1>
      <label style={{fontSize: '14px'}}>
        Название
        <input  onChange={(e)=> debouncedHandleTitle(e.target.value)}className={styles.filter} placeholder='Введите название' />
      </label>
      <DropDown title={"Жанр"} options={genres} callback={handleGenres} />
      <DropDown title={"Кинотеатр"} options={cinemas} callback={handleCinemaId}/> 
    </section>
  )

}


export default Sidebar