import React from "react"
import { Link } from "react-router-dom"

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
        <ul className="category">
          <Link to="/ac"><li>AC</li></Link>
          <Link to='/books' ><li>Books</li></Link>
          <Link to='/computers' ><li>Computers</li></Link>
          <Link to='/fridge' ><li>Fridge</li></Link>
          <Link to='/furniture' ><li>Furniture</li></Link>
          <Link to='/kitchen' ><li>Kitchen</li></Link>
          <Link to='/men' ><li>Men</li></Link>
          <Link to='/products' ><li>Products</li></Link>
          <Link to='/speaker' ><li>Speaker</li></Link>
          <Link to='/tv' ><li>TV</li></Link>
          <Link to='/watch' ><li>Watch</li></Link>
          <Link to='/woman' ><li>Woman</li></Link>
        </ul>
      </div>
    </>
  )
}

export default Navbar
