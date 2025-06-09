import React from 'react'
import HeroSection from './HeroSection'
import Univers from './Univers'
import Product from './Product'

function ProductPage() {
  return (
    <div className="container-fluid p-20">
    <HeroSection />
    <Product />
    <Univers />

    </div>
  )
}

export default ProductPage