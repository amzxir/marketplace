import React from 'react'

export default function Banner() {
  return (
    <div className='container'>
        <div className="sale-banner banner br-sm">
            <div className="banner-content">
                <h4
                    className="content-left banner-subtitle text-uppercase mb-8 mb-md-0 mr-0 mr-md-4 text-secondary ls-25">
                    <span className="text-dark font-weight-bold lh-1 ls-normal">Up
                        <br/>To</span>20% Sale!</h4>
                <div className="content-right">
                    <h3 className="banner-title text-uppercase font-weight-normal mb-4 mb-md-0 ls-25 text-white">
                        <span>Pay Only For
                            <strong className="mr-10 pr-lg-10">Your Lovling Electronics</strong>
                            Pay Only For
                            <strong className="mr-10 pr-lg-10">Your Lovling Electronics</strong>
                            Pay Only For
                            <strong className="mr-10 pr-lg-10">Your Lovling Electronics</strong>
                        </span>
                    </h3>
                    <a href="demo9-shop.html" className="btn btn-white btn-rounded">Shop Now
                        <i className="w-icon-long-arrow-right"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

