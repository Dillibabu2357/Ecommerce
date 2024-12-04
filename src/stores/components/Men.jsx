import React from "react"
import { menData } from "../data/men"

const Men = () => {

  const firstFiveMen = menData.slice(0, 5)

  return (
    <>
      <h1 className="TitleSection" >Men</h1>
      <div className="productSection">
        {
        firstFiveMen.map((item) => {
          return (
            <div className="imageBox">
              <img className="imageSection" src={item.image} />
            </div>
          )
        })
        }
      </div>
    </>
  )
}

export default Men
