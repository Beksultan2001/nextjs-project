import React from 'react';
import Details from '../../components/Details';


function Page() {
  return (
    <section style={{height: '81vh',  backgroundColor: '#E0E0E0',padding: '24px 32px'}}>
      <div style={{padding: '24px',background: 'white',borderRadius: '8px'}}>
        <h3 style={{fontSize: '32px'}}>Вопросы-ответы</h3>
      </div>
      <Details />
      <Details />
      <Details />
      <Details />
    </section>
  )
}

export default Page;