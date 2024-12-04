import React from 'react'
import { kitchenData } from '../data/kitchen'

const Kitchen = () => {

    const firstFiveKitchen = kitchenData.slice(0,5)

  return (
    <>
    <h1 className="TitleSection" >Kitchen</h1>
    <div className='productSection' >
        {
            firstFiveKitchen.map((item)=>{
                return(
                    <div className='imageBox' >
                        <img className='imageSection' src={item.image} alt="" />
                    </div>
                )
            })
        }
    </div>
    </>
  )
}

export default Kitchen