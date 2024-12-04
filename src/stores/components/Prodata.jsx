import React from "react"

const Prodata = () => {

  const firstFiveProdata = ProdataData.slice(0, 5)

  return (
    <>
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
