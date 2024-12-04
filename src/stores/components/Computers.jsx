import React from "react"
import { computerData } from "../data/computers"

const Computers = () => {
  const firstFiveComputers = computerData.slice(0, 5)

  return (
    <>
      <h1 className="TitleSection" >Computers</h1>
      <div className="productSection">
        {firstFiveComputers.map((item) => {
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

export default Computers
