import React, { useState,useEffect } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from './Card';
import axios from 'axios'

const FreeBook = () => {
  const [books,setBooks] = useState([])

  useEffect(() => {
      const getBook = async () => {
        try {
         const res = await  axios.get('http://localhost:3000/books/freebook')
         setBooks(res.data)
         
        } catch (error) {
          console.log('error',error);
          
        }
      }

      getBook()
  }, [])
  
    // const filteredBooks = books.filter(book => book.category === 'free')
    
    let settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    
  return (
    <>
        <div className='max-w-screen-2xl container mx-auto  px-4 md:px-20  my-10 space-y-8'>
          <div className='space-y-2'>
          <h1 className='text-xl font-medium'>Free Offered Courses</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim maxime assumenda beatae et sit mollitia? Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis minus voluptates autem aliquam ea et.</p>
          </div>

          <div>
            <Slider {...settings}>
              {books?.map(book =>(
                <Card book={book} key={book._id} />
              ))}
              </Slider>
          </div>
        </div>
    </>
  )
}

export default FreeBook