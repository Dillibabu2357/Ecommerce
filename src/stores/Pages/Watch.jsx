import React from "react"
import { watchData } from "../data/watch"
import Navbar from "../components/Navbar"

const Watch = () => {
  return (
    <>
    <Navbar/>
      <h1 className="TitleSection">Watches</h1>
      <div className="productImage">
        {watchData.map((item) => {
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

export default Watch
