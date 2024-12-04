import React from 'react'
import { womanData } from '../data/woman'

const Woman = () => {

    const firstFiveWoman = womanData.slice(0,5);

  return (
    <>
    <h1 className="TitleSection" >Woman</h1>
        <div className='productSection' >
        {
            firstFiveWoman.map((item)=>{
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

export default Woman