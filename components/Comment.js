import React from 'react';
import DefaultComment from '@/public/icons/DefaultComment';


function Comment({data}) {

  return (
    <div  style={{display: 'flex',background: 'white',borderRadius: '8px',width: '100%',padding: '24px',marginTop: '24px'}}>
        <div style={{ display: 'flex',justifyContent: 'center',alignItems: 'center',background: '#E0E0E0',width: '100px',height: '100px'}}>
            <DefaultComment />
        </div>
        <div style={{width: '100%',marginLeft: '32px'}}>
        <div style={{display: 'flex',justifyContent: 'space-between'}}>
            <h3>{data.name}</h3>
            <span>Оценка: <strong>{data.rating}</strong></span>
        </div>
        <p style={{marginTop: '16px'}}>
                {data.text}
            </p>
        </div>
    </div>
  )

}

export default Comment