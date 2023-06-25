'use client';
import React,{useEffect} from 'react';
import styles from '../styles/page.module.css';
import Bag from '../public/icons/Bag';
import Link from 'next/link';
import { useContext } from "react";
import { Message_data } from '@/context/context';


export default function Navbar() {

    const {state} = useContext(Message_data);

    return (
      <header className={styles.header}>
        <Link href={'/'} passHref>
          <h3>Билетопоиск</h3>
        </Link>
        <Link href={'/store'} passHref>
          <div className={styles.header_items}>
            <span>{Object.values(state).reduce((a, b) => a + (b?.count || 0), 0)}</span>
            <Bag />
          </div>
        </Link>
      </header>
    )
  }
  