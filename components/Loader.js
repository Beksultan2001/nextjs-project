import React from 'react';
import styles from '../styles/Page.module.css'


function Loader() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',padding: '24px 32px',background: '#E0E0E0',minHeight: '90vh'}}>
      <div className={styles.notify_content_box_loader}></div>
    </div>
  )
}

export default Loader