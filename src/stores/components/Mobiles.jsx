import React from "react"
import { mobileData } from "../data/mobiles"

const Mobiles = () => {
  const firstFiveImages = mobileData.slice(0, 5)

  return (
    <>
      <h1 className="TitleSection" >Mobiles</h1>
      <div className="productSection">
        {firstFiveImages.map((item) => {
          return (
            <div className="imageBox">
              <img className="imageSection" src={item.image} alt="" />
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Mobiles
