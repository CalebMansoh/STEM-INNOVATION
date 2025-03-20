import React from 'react'

const ContentGrid = (cards) => {
  // console.log(cards);
  
  return (
    <div className='mt-10 md:-mt-14 bg-slate-400 rounded-md shadow-lg hover:-translate-y-10 hover:scale-105 duration-1000 eiase-in-out' data-aos="zoom-in-down">
      <div className='w-[300px] sm:w-[200px] lg:w-[300px]'>
        <div>
          <img src={cards.image} alt="" className='w-full rounded-t-md' height='200px'/>
        </div>
        <div className='px-2 py-10'>
          <h2 className='text-center text-slate-800'>{cards.title}</h2>
        <p className='text-center text-slate-900'>
          {cards.discription}
        </p>
        </div>
      </div>
    </div>
  )
}

export default ContentGrid