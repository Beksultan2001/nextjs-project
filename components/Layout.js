'use client';
import Navbar from './Navbar';
import styles from '../styles/page.module.css';
import Footer from './Footer';

const Layout=({children})=>{

    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    )

}
export default Layout;