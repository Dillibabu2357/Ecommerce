import React from "react"
import { tvData } from "../data/tv"
import Navbar from "../components/Navbar"

const Tv = () => {
  return (
    <>
    <Navbar/>
      <h1 className="TitleSection">TV</h1>
      <div className="productImage">
        {tvData.map((item) => {
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

export default Tv
