import React from 'react';
import styles from '../style';
import {clients} from '../contants';

const Clients = () =>  (
    
  <section className={`${styles.flexCenter} my-4`}>
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      {clients.map((client) =>(
        <div key={client.id} 
        className={`flex-1 ${styles.flexCenter} sm:min-w-[185px] min-w-[110px]`}>
          <img src={client.logo} alt="client"
          className='sm:w-[192px] w-[100px] object-contain hover:brightness-200 cursor-pointer' />
        </div>
      ))}
    </div>
  </section>
  )

export default Clients
