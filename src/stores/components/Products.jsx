import React from 'react'
import Mobiles from './Mobiles'
import Woman from './Woman'
import Computers from './Computers'
import Books from './Books'
import Fridge from './Fridge'
import Furniture from './Furniture'
import Kitchen from './Kitchen'
import Men from './Men'
import Mobile from './Mobile'
import Speaker from './Speaker'
import Tv from './Tv'
import Watch from './Watch'

const Products = () => {
  return (
    <>
    <h1 className="TitleSection" >Products</h1>
    <div>
      <Mobiles/>
      <Woman/>
      <Computers/>
      <Books/>
      <Fridge/>
      <Furniture/>
      <Kitchen/>
      <Men/>
      <Mobile/>
      <Speaker/>
      <Tv/>
      <Watch/>
    </div>
    </>
  )
}

export default Products
