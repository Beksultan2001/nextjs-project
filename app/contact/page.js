import React from 'react';
import Details from '../../components/Details';


function Page() {
  return (
    <section style={{minHeight: '81vh',  backgroundColor: '#E0E0E0',padding: '24px 32px'}}>
      <div style={{padding: '24px',background: 'white',borderRadius: '8px'}}>
        <h3 style={{fontSize: '32px'}}>Вопросы-ответы</h3>
      </div>
      <Details title={`Что такое Билетопоиск?`} text={`Мы — крупнейший сервис о кино в рунете. На нем вы сможете посмотреть фильмы и сериалы, купить билеты в кино, узнать рейтинги популярных видео и интересные факты, поставить фильмам оценки, написать рецензии и дополнить описание фильмов.`} />
      <Details title={`Какой компании принадлежит Билетопоиск?`}  />
      <Details title={`Как купить билет на Билетопоиск?`}  />
      <Details title={`Как оставить отзыв на Билетопоиск?`}  />
    </section>
  )
}

export default Page;