import React from 'react'
import Details from './details/details'
import Total from './total/total'
import View from './view/view'
import ProductSection from './product/product-section'
import Sidbar from './sidbar/sidbar'

export default function Single() {
  return (
    <>
      <div className="page-content mt-5">
          <div className="container">
              <div className="row gutter-lg rtl">
                  <div className="main-content">
                      <View/>
                      {/* <Total/> */}
                      <Details/>
                      <ProductSection/>
                  </div>
                  <Sidbar/>
              </div>

          </div>
      </div>
    </>
  )
}

