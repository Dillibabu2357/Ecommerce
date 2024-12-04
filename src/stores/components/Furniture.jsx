import React from 'react'
import { furnitureData } from '../data/furniture'

const Furniture = () => {

    const firstFiveFurniture = furnitureData.slice(0,5);

  return (
    <>
    <h1 className="TitleSection" >Furnitures</h1>
    <div className='productSection' >
        {
            firstFiveFurniture.map((item)=>{
                return(
                    <div className='imageBox' >
                        <img className='imageSection'  src={item.image} alt="" />
                    </div>
                )
            })
        }
    </div>
    </>
  )
}

export default Furniture