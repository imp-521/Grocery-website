import React from 'react'
import ProductPage from '../ProductPage/ProductPage'
import bgDairy from '../../assets/dairy-banner.jpg'

const Dairy = () => {
  return (
    <div>
      <ProductPage title="لبنیات و تخم مرغ" bgImage={bgDairy} categories={['لبنیات']}/>
    </div>
  )
}

export default Dairy