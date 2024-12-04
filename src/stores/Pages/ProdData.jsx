import React from "react"
import { mobileData } from "../data/mobiles"
import Navbar from "../components/Navbar"

const ProData = () => {

  return (

    <>
    <Navbar/>
      <h1 className="TitleSection" >Prodata</h1>
      <div className="productSection">
        {
        mobileData.map((item) => {
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

export default ProData
