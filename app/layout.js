import './globals.css'
import { Inter } from 'next/font/google'
import Layout from '../components/Layout';
import Context from "../context/context";


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <Context>
          <div>
            <Layout>
              {children}
            </Layout>
          </div>
        </Context>
        <div id='modal-root'></div>
      </body>
    </html>
  )
}
