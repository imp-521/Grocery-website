import React, { useState } from "react";
import Heading from "../Heading/Heading";
import Cards from "../Cards/Cards";
import productList from "../ProductList/ProductList";
import Button from "../Button/Button";
import { Link } from "react-router-dom";


const Products = () => {

   const categoreis = ['همه', 'میوه', 'سبزیجات', 'لبنیات', 'دریایی']
   const [activeTab, setActiveTab] = useState('همه')
   let filteredItems = activeTab === 'همه' ? productList : productList.filter(item=> item.category === activeTab)
   const render = filteredItems.slice(0 ,8).map(items => { items.category === activeTab
    return(
      <Cards key={items.id} image={items.picture} name={items.name} price={items.price}/>
    )
   })
  return (
    <section>
      <div className="w-full min-h-screen px-8 flex items-center flex-col mt-25 lg:px-15">
        <div className="flex items-center justify-center flex-col flex-1 w-full gap-8 md:gap-10 lg:gap-14">
            <Heading first='محصولات' third='ما'/>
            <div className="flex items-center justify-between md:justify-center md:gap-4 lg:gap-2 w-full flex-row-reverse">
                {
                    categoreis.map(category => {
                        return(
                           <button className={`px-2 py-1 md:px-3 md:py-1 md:text-sm lg:px-5 lg:py-2 lg:text-lg ${category === activeTab ? 'bg-linear-to-b from-orange-400 to-orange-500 text-white' : 'bg-zinc-100'} text-sm rounded-sm md:rounded-lg cursor-pointer`} key={category} onClick={()=>setActiveTab(category)}>
                               {category}
                           </button>
                        )
                    })
                }
            </div>
        </div>
        <div className="flex w-full items-center justify-center lg:justify-end flex-3 flex-col md:flex-row gap-5 mt-7 px-3 md:flex-wrap lg:px-8 lg:gap-7 lg:mt-20">
            {render}
        </div>
        <div className="mt-10">
           <Link to="/allproducts" className="bg-linear-to-b from-orange-400 to-orange-500 text-sm text-white rounded-lg cursor-pointer py-2 px-4 hover:scale-105 hover:to-orange-600 transform-all duration-300 sm:px-8 sm:py-3 lg:px-6 lg:py-2 lg:text-lg md:px-4 md:py-2">مشاهده همه</Link>
        </div>
      </div>
    </section>
  );
};

export default Products;
