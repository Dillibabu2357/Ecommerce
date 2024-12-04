import React from "react"
import { tvData } from "../data/tv"

const Tv = () => {

    const firstFiveTV = tvData.slice(0,5);

  return (
    <>
      <h1 className="TitleSection" >TV</h1>
      <div className="productSection">
        {firstFiveTV.map((item) => {
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

export default Tv
