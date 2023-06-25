import React, { useEffect, useState } from 'react';
import styles from '../styles/Modal.module.css';
import  ReactDOM  from 'react-dom';
import Close from '@/public/icons/Close';


function Modal({show, onClose, children}) {
    const [isBrowser, setIsBrowser] = useState(false);

    useEffect(() => {
        setIsBrowser(typeof window !== 'undefined');
    }, []);

    const modalContent = show ? (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <div style={{display: 'flex',justifyContent: 'space-between'}}>
                    <h3 style={{fontSize: '20px'}}>Удаление билета</h3>
                    <div className={styles.header}>
                        <button className='btn' onClick={()=> onClose(false)} style={{background: 'white',border: 'none',cursor: 'pointer'}}><Close/></button>
                    </div>
                </div>
                <div className={styles.body}>
                    {children}
                </div>
            </div>
        </div>
    ) : null;

    if (isBrowser) {
        return ReactDOM.createPortal(
            modalContent, document.getElementById('modal-root')
        );
    } else {
        return null;
    }
}

export default Modal;
