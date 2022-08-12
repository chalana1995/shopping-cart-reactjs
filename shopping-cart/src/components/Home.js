import React from 'react'
import { CartState } from '../context/Context'
import Filter from './Filter';
import Singleproduct from './Singleproduct';
import './styles.css'

const Home = () => {

  const { state, productState } = CartState();

  const transformProducts = () => {
    let sortedProducts = state.products;

    if (productState.sort) {
      sortedProducts = sortedProducts.sort((a, b) =>
      productState.sort === "lowToHigh" ? a.price - b.price : b.price - a.price
      );
    }

    if (!productState.byStock) {
      sortedProducts = sortedProducts.filter((prod) => prod.inStock);
    }

    if (productState.byFastDelivery) {
      sortedProducts = sortedProducts.filter((prod) => prod.fastDelivery);
    }

    if (productState.byRating) {
      sortedProducts = sortedProducts.filter(
        (prod) => prod.ratings >= productState.byRating
      );
    }

    if (productState.searchQuery) {
      sortedProducts = sortedProducts.filter((prod) =>
        prod.name.toLowerCase().includes(productState.searchQuery)
      );
    }

    return sortedProducts;
  };

  return (
    <div className='home'>
      <Filter/>
      <div className='productContainer'>
        {transformProducts().map((prod) => (
          <Singleproduct prod={prod} key={prod.id} />
        ))}
      </div>
    </div>
  )
}

export default Home