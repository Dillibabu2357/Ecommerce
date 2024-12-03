import React from 'react'

const Navbar = () => {
  return (
    <div className="navSection">
        <div className="title">E-Commerce</div>
        <div className="search"><input type="text" placeholder='search here any item' /></div>
        <div className="user">
            <div className="user-detail">
                SignIN/SignOut
            </div>
            <div className="Cart">Cart</div>
        </div>
    </div>
  )
}

export default Navbar
