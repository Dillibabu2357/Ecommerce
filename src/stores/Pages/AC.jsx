import React from "react"
import { acData } from "../data/ac"
import Navbar from "../components/Navbar"

const AC = () => {
  return(
    <>
    <Navbar/>
    <h1 className="TitleSection" >AC</h1>
    <div className="productImage" >
        {
            acData.map((item)=>{
                return(
                    <div>
                        <div className="imageBox" >
                        <img className="imageSection" src={item.image} alt="" />
                    </div>
                    <div>
                        {item.model},{"Rupee"+item.price}
                    </div>
                    </div>
                )
            })
        }
    </div>
    </>
  )
}

export default AC
