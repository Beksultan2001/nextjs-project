'use strict';
import * as React from 'react';
import styles from '../styles/page.module.css';
import Link from 'next/link';

export default function Footer() {
    return (
      <footer className={styles.footer}>
        <Link href={'/contact'} passHref>
          <h5 style={{fontSize: '20px', fontWeight: '400'}}>Вопросы-ответы</h5>
        </Link>
        <Link href={'/about'} passHref>
          <p style={{fontSize: '20px', fontWeight: '400'}}>О нас</p>
        </Link>
      </footer>
    )
}
