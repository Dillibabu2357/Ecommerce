import React from "react"
import { mobileData } from "../data/mobiles"
import Navbar from "./Navbar"

const Prodata = () => {

  const firstFiveProdata = mobileData.slice(0, 5)

  return (
    <>
    <Navbar/>
      <h1 className="TitleSection" >Prodata</h1>
      <div className="productSection">
        {
        firstFiveProdata.map((item) => {
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

export default Prodata
