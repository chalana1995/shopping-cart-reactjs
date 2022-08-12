import React from 'react'
import { CartState } from '../context/Context'
import Filter from './Filter';
import Singleproduct from './Singleproduct';
import './styles.css'

const Home = () => {

  const { state } = CartState();

  console.log(state);

  return (
    <div className='home'>
      <Filter/>
      <div className='productContainer'>
        {state.products.map((prod) => (
          <Singleproduct prod={prod} key={prod.id} />
        ))}
      </div>
    </div>
  )
}

export default Home