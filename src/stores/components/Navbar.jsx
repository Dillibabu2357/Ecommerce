import React from "react"

const Navbar = () => {
  return (
    <>
      <div className="navSection">
        <div className="title">E-Commerce</div>
        <div className="search">
          <input type="text" placeholder="search here any item" />
        </div>
        <div className="user">
          <div className="user-detail">SignIN/SignOut</div>
          <div className="Cart">Cart</div>
        </div>
      </div>
      <div className="subMenu">
        <ul className="category" >
          <li>AC</li>
          <li>Books</li>
          <li>Computers</li>
          <li>Fridge</li>
          <li>Furniture</li>
          <li>Kitchen</li>
          <li>Men</li>
          <li>Navbar</li>
          <li>Prodata</li>
          <li>Products</li>
          <li>Speaker</li>
          <li>TV</li>
          <li>Watch</li>
          <li>Woman</li>
        </ul>
      </div>
    </>
  )
}

export default Navbar
