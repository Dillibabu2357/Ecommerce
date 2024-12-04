import React from 'react'
import { watchData } from '../data/watch'

const Watch = () => {

    const firstFiveWatches = watchData.slice(0,5);

  return (
    <>
    <h1 className="TitleSection" >Watches</h1>
    <div className='productSection' >
        {
            firstFiveWatches.map((item)=>{
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

export default Watch