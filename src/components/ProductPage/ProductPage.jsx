import React from 'react'
import Banner from '../Banner/Banner'
import productList from '../ProductList/ProductList'
import Cards from '../Cards/Cards'
const ProductPage = ({title, bgImage, categories=[]}) => {


  let filteredItem = categories.includes('همه') ? productList : productList.filter(item => categories.includes(item.category))

  const renderProduct = filteredItem.map(item =>{
    return(
        <Cards image={item.picture} price={item.price} name={item.name}/>
    )
  })
  return (
    <div className=''>
        <Banner title={title} bgImage={bgImage}/>
        <div className='flex w-full items-center justify-center flex-3 flex-col md:flex-row gap-5 mt-7 px-8 md:flex-wrap lg:gap-7 lg:mt-20 lg:px-15'>
            {renderProduct}
        </div>
    </div>
  )
}

export default ProductPage