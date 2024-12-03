import React from 'react'
import { mobileData } from '../data/mobiles'

const Mobiles = () => {
  return (
    <div className='productSection' >
      {
        mobileData.map((item)=>{
          return(
            <div className='imageBox' >
              <img className='imageSection' src={item.image} alt="" />
            </div>
          )
        })
      }
    </div>
  )
}

export default Mobiles
