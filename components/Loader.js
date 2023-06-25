import React from 'react';


function Loader() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',padding: '24px 32px',background: '#E0E0E0',minHeight: '90vh'}}>
        <h1>Загружается....</h1>
    </div>
  )
}

export default Loader