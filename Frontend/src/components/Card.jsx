import React from 'react'

const Card = ({book}) => {

    
    
  return (
    <div className='my-3'>
        <div className="card bg-white text-black h-[445px] dark:text-white dark:bg-base-300 w-72 h md:w-72 shadow-2xl shadow-black hover:scale-110 duration-150 transition-all cursor-pointer ">
        <figure className='w-full h-2/3 overflow-hidden'>
            <img
            className='w-[90%] h-[90%] object-cover rounded-md shadow-xl shadow-base-300'
            src={book.image}
            alt="Shoes" />
        </figure>
        <div className="card-body">
            <h2 className="card-title font-medium tracking-tighter">
            {book.title}
            <div className="badge badge-secondary">{book.category}</div>
            </h2>
            <p>{book.description}</p>
            <div className="card-actions justify-between">
            <div className="badge badge-outline">{book.price} $</div>
            <div className="badge badge-outline hover:bg-pink-600 duration-200 cursor-pointer">Buy Now</div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Card