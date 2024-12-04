import React from 'react'
import { booksData } from '../data/books'

const Books = () => {

    const firstFiveBooks = booksData.slice(0,5);

  return (
    <>
    <h1 className="TitleSection" >Books</h1>
    <div className='productSection' >{
        firstFiveBooks.map((item)=>{
            return(
                <div className='imageBox' >
                    <img className='imageSection' style={{ margin: '10px' }}  src={item.image} alt="" />
                </div>
            )
        })
        }</div>
    </>
  )
}

export default Books