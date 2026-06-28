import React from 'react'
import bgSeaFood from '../../assets/seafood-banner.jpg'
import ProductPage from '../ProductPage/ProductPage'

const Meet = () => {
  return (
    <div>
      <ProductPage title="گوشت و غذاهای دریایی" bgImage={bgSeaFood} categories={['دریایی']}/>
    </div>
  )
}

export default Meet