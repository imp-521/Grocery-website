import React from 'react'
import fruit from "../../assets/fruits-and-veggies.png"
import dairy from "../../assets/dairy-and-eggs.png"
import meat from "../../assets/meat-and-seafood.png"
import Button from '../Button/Button'

const Category = () => {
  return (
    <section>
        <div dir='rtl' className='w-full h-340 md:h-100 lg:min-h-screen flex items-center justify-center gap-3 flex-col px-8'>
            <div className='flex items-center justify-center w-full h-[10%] lg:h-[20%] lg:mt-20 lg:pb-10'>
               <h2 className='font-bold text-2xl md:text-3xl lg:text-4xl'><span className='border-b-2 border-orange-500 pb-1'> خرید بر</span>  اساس <span className='text-orange-500'>دسته بندی</span></h2>
            </div>
            <div className='w-full h-[90%] flex items-center  flex-col md:flex-row'>
               <div className='flex items-center justify-center md:justify-between flex-col w-full h-1/3 md:w-[1/3] md:h-full gap-3 overflow-hidden md:py-3'>
                   <div className=''>
                      <img src={fruit} alt="fruit and vegtebles" className='w-70 h-40 md:w-50 md:h-20 lg:object-contain lg:w-90 lg:h-40'/>
                   </div>
                   <h3 className='text-xl font-bold md:text-2xl lg:text-3xl'>میوه و سبزیجات</h3>
                   <p className='text-gray-500 text-center md:px-2 lg:text-lg'>محصولات تازه و ارگانیک که روزانه از مزارع محلی تهیه می‌شوند. طیف وسیعی از میوه‌های فصل و سبزیجات تازه را کاوش کنید.</p>
                   <Button content="مشاهده همه" />
               </div>
               <div className='flex items-center justify-center md:justify-between  flex-col w-full h-1/3 gap-3  md:w-[1/3] md:h-full md:py-3'>
                  <div className=''>
                     <img src={dairy} alt="eggs" className='w-70 h-40 md:w-50 md:h-20 lg:object-contain lg:w-90 lg:h-40'/>
                  </div>
                   <h3 className='text-xl lg:text-3xl font-bold md:text-2xl'>لبنیات و تخم مرغ</h3>
                   <p className='text-gray-500 text-center md:px-2 lg:text-lg'>فرآورده‌های لبنی و تخم‌مرغ‌های محلی. از شیر و ماست خامه‌ای گرفته تا پنیرهای سنتی و دست‌ساز انتخاب کنید و طعمی جدید را تحربه کنید .</p>
                   <Button content="مشاهده همه" />
               </div>
               <div className='flex items-center justify-center md:justify-between flex-col w-full h-1/3 gap-3  md:w-[1/3] md:h-full md:py-3'>
                 <div className=''>
                    <img src={meat} alt="" className='w-70 h-40 md:w-50 md:h-20 lg:object-contain lg:w-90 lg:h-40'/>  
                 </div>
                 <h3 className='font-bold text-xl md:text-2xl lg:text-3xl'>گوشت و غذای های دریایی</h3>
                 <p className='text-gray-500 text-center md:px-2 lg:text-lg'>گوشت و مرغ باکیفیت که با اصول بهداشتی تهیه شده‌اند. از بین تکه‌های تازه، گزینه‌های طعم‌دار شده و موارد دیگر انتخاب کنید. </p>
                 <Button content="مشاهده همه" />
               </div>
            </div>
        </div>
    </section>
  )
}

export default Category