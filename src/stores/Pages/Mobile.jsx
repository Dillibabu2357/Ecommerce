import React from "react"
import { mobileData } from "../data/mobiles"
import Navbar from "../components/Navbar"
import { Link } from "react-router-dom"

const Mobiles = () => {
  return (
    <>
    <Navbar/>
      <h1 className="TitleSection">Mobiles</h1>
      <div className="productImage">
        {mobileData.map((item) => {
          return (
            <div>
              <Link to={`/mobile/${item.id}`} >
              <div className="imageBox">
                <img className="imageSection" src={item.image} alt="" />
              </div>
              </Link>
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
