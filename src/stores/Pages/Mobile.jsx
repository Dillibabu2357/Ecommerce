import React from "react"
import { mobileData } from "../data/mobiles"
import Navbar from "../components/Navbar"

const Mobiles = () => {
  return (
    <>
    <Navbar/>
      <h1 className="TitleSection">Mobiles</h1>
      <div className="productImage">
        {mobileData.map((item) => {
          return (
            <div>
              <div className="imageBox">
                <img className="imageSection" src={item.image} alt="" />
              </div>
              <div>
                {item.model},{"Rupee" + item.price}
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Mobiles
