import React from 'react'
import { fridgeData } from '../data/fridge'

const Fridge = () => {

    const firstFiveFridge = fridgeData.slice(0,5);

  return (
    <>
    <h1 className="TitleSection" >Fridge</h1>
    <div className='productSection' >
        {
            firstFiveFridge.map((item)=>{
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

export default Fridge