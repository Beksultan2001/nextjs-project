import React, { useEffect, useState } from 'react';
import styles from '../styles/page.module.css';
import DropDown from './Dropdown';
import { useContext } from 'react';
import { Message_data } from "../context/context";
import Http from '../api/Http';

// const debounce = (func, delay) => {
//   let debounceTimer
//   return function() {
//       const context = this
//       const args = arguments
//           clearTimeout(debounceTimer)
//               debounceTimer
//           = setTimeout(() => func.apply(context, args), delay)
//   }
// }

function Sidebar() {

  const {genres,setCinemaId,setMovies,allMovies,setGenreFilter,setTitleFilter,titleFilter,genreFilter,setCinemaFilter,cinemaFilter} = useContext(Message_data);
  const [cinemas,setCinemas]=useState([]);

  const fetchData = async () => {
    let getList = await Http.getCinemas();
    setCinemas(getList.data);
  }

  useEffect(function() {
    fetchData();
  },[]);

  const handleCinemaId=function (value){
    setCinemaFilter(value.name);
    setCinemaId(value.id);
  };

  const handleGenres=function (value){
    if (value.name=='Не выбран'){
      setGenreFilter('Не выбран');
      setMovies(allMovies);
      return;
    }
    const filteredMovies = allMovies.filter(movie =>{
      return movie.genre===value.name;
    });
    setGenreFilter(value.name);
    setMovies(filteredMovies);
  }

  useEffect(function(){
    console.log(genreFilter,'genreFilter')
  },[genreFilter]);


  return (
    <section className={styles.sidebar}>
      <h1>Фильтр поиска</h1>
      <label style={{fontSize: '14px'}}>
        Название
        <input value={titleFilter}  onChange={(e)=> setTitleFilter(e.target.value)} className={styles.filter} placeholder='Введите название' />
      </label>
      <DropDown title={"Жанр"} defaultOption={genreFilter} options={genres} callback={handleGenres} placeholder={`Выберите жанр`} />
      <DropDown title={"Кинотеатр"} defaultOption={cinemaFilter} options={cinemas} callback={handleCinemaId} placeholder={`Выберите кинотеатр`}/> 
    </section>
  )

}


export default Sidebar