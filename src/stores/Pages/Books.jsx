import React from "react"
import { booksData } from "../data/books"
import Navbar from "../components/Navbar"

const Books = () => {
  return (
    <>
    <Navbar/>
      <h1 className="TitleSection">Books</h1>
      <div className="productImage">
        {booksData.map((item) => {
          return (
            <div>
              <div className="imageBox">
                <img
                  className="imageSection"
                  style={{ margin: "10px" }}
                  src={item.image}
                  alt=""
                />
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

export default Books
