import React from 'react'
import Banner from '../Banner/Banner'
import ProductPage from '../ProductPage/ProductPage'
import bgFruits from '../../assets/fruits-banner.jpg'

const Fruits = () => {
  return (
    <div>
      <ProductPage title="میوه و سبزیجات" bgImage={bgFruits} categories={['میوه']}/>
    </div>
  )
}

export default Fruits