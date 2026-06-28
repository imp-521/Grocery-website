import React from 'react'
import bgAll from '../../assets/all-banner.jpg'
import ProductPage from '../ProductPage/ProductPage'

const AllProducts = () => {
  return (
    <div>
       <ProductPage title="همه محصولات" bgImage={bgAll} categories={['همه']}/>
    </div>
  )
}

export default AllProducts