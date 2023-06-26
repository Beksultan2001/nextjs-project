'use client'
import React,{useState} from 'react'
import styles from '../styles/page.module.css';
import Expand from '@/public/icons/Expand';
import Collapsed from '@/public/icons/Collapsed';

function Details({title,text}) {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = (e) => {
        e.preventDefault();
        setIsOpen(prev => !prev);
    };

    const lorem=`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tincidunt elit vitae dolor suscipit tincidunt. Aenean dolor turpis, semper non consequat ullamcorper, bibendum at leo. Nulla facilisi. Morbi magna sapien, porta sit amet velit nec, imperdiet congue sem. Nunc nec venenatis neque. Pellentesque facilisis vestibulum blandit. Vivamus malesuada velit mauris, ultrices elementum neque mollis ut. Integer tempus sem a enim accumsan, nec ullamcorper elit egestas. Etiam lorem nibh, accumsan sit amet aliquam id, imperdiet vel urna. Sed ullamcorper sit amet sapien a sollicitudin. Morbi ornare tortor sit amet dignissim pharetra. Aliquam erat volutpat. Morbi venenatis in nisi ac feugiat`;

    return (
        <details open={isOpen} className={styles.details}>
            <summary onClick={handleToggle} style={{listStyle: 'none',fontWeight: 600, display: 'flex',justifyContent: 'space-between',cursor: 'pointer', alignItems: 'center',fontSize: 24}}>{title}<span className={styles.iconHandleOpen}>{isOpen ?<Collapsed style={{color: 'red'}}/> : <Expand /> }</span></summary>
            <p style={{marginTop: '16px'}}>{text?text:lorem}</p>
        </details>
    )
}

export default Details;
