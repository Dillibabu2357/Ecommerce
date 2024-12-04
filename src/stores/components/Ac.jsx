import React from "react"
import { acData } from "../data/ac"

const Ac = () => {
  return(
    <>
    <h1 className="TitleSection" >AC</h1>
    <div className="productSection" >
        {
            acData.map((item)=>{
                return(
                    <div className="imageBox" >
                        <img className="imageSection" src={item.image} alt="" />
                    </div>
                )
            })
        }
    </div>
    </>
  )
}

export default Ac
