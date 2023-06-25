'use client'
import React,{ useContext} from 'react';
import { Message_data } from '@/context/context';
import Movie from '@/components/Movie';


function Page() {

    const {state} = useContext(Message_data);

  return (
    <section style={{height: '81vh',  backgroundColor: '#E0E0E0',padding: '24px 32px'}}>
        {
            Object.values(state).map((t) => {
                return (
                    <Movie data={t} handleRemove={true}/>
                )
            })
        }
    </section>
  )
}

export default Page