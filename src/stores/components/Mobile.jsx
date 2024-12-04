import React from "react"
import { mobileData } from "../data/mobiles"

const Mobile = () => {

  const firstFiveMobile = mobileData.slice(0, 5)

  return (
    <>
      <h1 className="TitleSection" >Moblie</h1>
      <div className="productSection">
        {
        firstFiveMobile.map((item) => {
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

export default Mobile
