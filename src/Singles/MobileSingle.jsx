import React from "react"
import { mobileData } from "../stores/data/mobiles"
import { useParams } from "react-router-dom"

const MobileSingle = () => {
  const { id } = useParams()

  const MobileProduct = mobileData.find((item) => item.id === id)

  return (
    <>
      <div className="Indiv-Prod ">
        <div className="Indiv-Image">
          <img src={MobileProduct.image} alt="" />
        </div>
        <div className="Indiv-Detail">
          <h2 className="detail">{MobileProduct.company}</h2>
          <h2 className="detail">{MobileProduct.price}</h2>
          <h4 className="detail">{MobileProduct.description}</h4>
          <button>Add to Cart</button>
        </div>
      </div>
    </>
  )
}

export default MobileSingle
