import React from 'react'
import './CategoriesItems.css'
const CategoriesItem = () => {
  return (
    <div className=' flex flex-wrap  w-full h-full justify-center items-center gap-5 mt-2 p-2   border-slate-400'>
      
      <div className='flex-1 border-2  '>
        <a href='https://www.google.com' > <img src='https://tpc.googlesyndication.com/simgad/8566666401164277452?' alt='samgun-ad'></img></a>
      </div>
      <div className='flex-1  border-2 '>
        <a href='https://www.google.com'  ><img src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/ghp-MMT-588432-dotd-b913ea94-90d1-4907-85b8-2c08144776ee.png;maxHeight=960;maxWidth=960" alt='deals'></img></a> 
      </div>
      <div className='flex-1 border-2'>
        <a href='https://www.google.com'  ><img src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/subghp-EVN-205479-macbook-pro-70a99cca-dd4e-4c9d-8009-e2e7c12505fd.jpg;maxHeight=960;maxWidth=960" alt='clearance'></img></a>
      </div>
    </div>
  )
}

export default CategoriesItem

   