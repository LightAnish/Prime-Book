import React,{useState,useEffect} from 'react'
import {Card} from '../../config/importComponents'
import { NavLink } from 'react-router-dom'
import axios from 'axios'

const Course = () => {

   const [books,setBooks] = useState([])

  useEffect(() => {
    const getBook = async () => {
      try {
       const res = await  axios.get('http://localhost:3000/books',{ withCredentials: true })
       setBooks(res.data)
       
      } catch (error) {
        console.log('error',error);
        
      }
    }

    getBook()
}, [])

const filteredBooks = books.filter(book => book.category === 'paid')
  
  return (
    <div className='max-w-screen-2xl container mx-auto px-4 md:px-20'>
      <div className='mt-28 text-center items-center justify-center space-y-8'>
        <h1 className='text-2xl'>Join Thousands Leveling Up Their Careers Today. <span className='text-pink-600'>Here!.</span> </h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores optio dolor corrupti in nam eum provident veritatis, enim repellat mollitia sed quos, exercitationem dolorem tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, animi unde porro nostrum expedita maiores ad corrupti qui cupiditate itaque?</p>

        <NavLink to={'/'} className="btn btn-secondary hover:bg-pink-600 duration-300">Back</NavLink>
      </div>
    
  <div className='mt-10 space-y-4'>
    <h1 className='text-2xl font-medium'>Courses</h1>
  <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10'>
        {filteredBooks.map(book => (
          <Card book={book} key={book._id}/> 
        ))}
      </div>
  </div>

    </div>
  )
}

export default Course