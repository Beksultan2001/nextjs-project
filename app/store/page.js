'use client'
import React,{ useContext} from 'react';
import { Message_data } from '@/context/context';
import Movie from '@/components/Movie';


function Page() {

    const {state} = useContext(Message_data);

  return (
    <section style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '81vh', backgroundColor: '#E0E0E0', padding: '24px 32px'}}>
    <div>
        {
            Object.values(state).map((t) => {
                return (
                    <Movie data={t} handleRemove={true}/>
                )
            })
        }
    </div>
    <div style={{display: 'flex', justifyContent: 'space-between', backgroundColor: 'white', padding: '24px', borderRadius: '8px'}}>
        <strong>Итого билетов:</strong><strong>{Object.values(state).reduce((a, b) => a + (b?.count || 0), 0)}</strong>
    </div>
</section>
  )
}

export default Page