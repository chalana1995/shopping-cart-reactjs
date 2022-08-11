import React from 'react'
import { CartState } from '../context/Context'
import Singleproduct from './Singleproduct';

const Home = () => {

  const { state } = CartState();

  console.log(state);

  return (
    <div className='home'>
      <div className='productContainer'>
        {state.products.map((prod) => (
          <Singleproduct prod={prod} key={prod.id} />
        ))}
      </div>
    </div>
  )
}

export default Home