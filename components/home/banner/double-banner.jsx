import React from 'react'

export default function DoubleBanner() {
  return (
    <div className='container'>
        <div className="row cols-md-2 mb-6 appear-animate">
            <div className="banner banner-fixed category-banner mb-4">
                <figure className="br-sm">
                    <img src="assets/images/demos/demo9/banner/2-1.jpg" alt="Category Banner" width="640"
                        height="200" style={{ backgroundColor:'#32373B' }} />
                </figure>
                <div className="banner-content y-50">
                    <h5 className="banner-subtitle text-uppercase text-secondary font-weight-bold">New Arrivals</h5>
                    <h3 className="banner-title text-white text-capitalize font-weight-normal mb-5 ls-25">
                        <strong>Flash Wireless</strong><br/>Earphones
                    </h3>
                    <a href="demo9-shop.html" className="btn btn-white btn-link btn-underline btn-icon-right">
                        Shop Now<i className="w-icon-long-arrow-right"></i>
                    </a>
                </div>
            </div>
            <div className="banner banner-fixed category-banner mb-4">
                <figure className="br-sm">
                    <img src="assets/images/demos/demo9/banner/2-2.jpg" alt="Category Banner" width="640"
                        height="200" style={{ backgroundColor:'#ECECEE' }} />
                </figure>
                <div className="banner-content y-50">
                    <h5 className="banner-subtitle text-capitalize font-weight-normal ls-25">
                        Flash Sale <span className="text-secondary text-uppercase">50% Off</span>
                    </h5>
                    <h3 className="banner-title text-capitalize font-weight-normal mb-5 ls-25">
                        <strong>Fashion Figure</strong><br/>Skate Sale
                    </h3>
                    <a href="demo9-shop.html" className="btn btn-dark btn-link btn-underline btn-icon-right">
                        Shop Now<i className="w-icon-long-arrow-right"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}
