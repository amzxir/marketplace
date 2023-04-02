import React from 'react'
import Image from 'next/image'

export default function BoxWrapper() {
  return (
    <div className='container'>
        <div className="row grid grid-float pt-2 banner-grid mb-9">
            <div className="grid-item col-lg-6 height-x2">
                <div className="banner banner-fixed banner-lg br-sm">
                    <figure>
                        <Image src="/assets/images/demos/demo9/banner/1-1.jpg" alt="Banner" width="670"
                            height="450" style={{ backgroundColor:'#E3E7EA' }} />
                    </figure>
                    <div className="banner-content y-50">
                        <h5 className="banner-subtitle text-capitalize font-weight-normal mb-0 ls-25">
                            Flash Sale <strong className="text-secondary text-uppercase">50% Off</strong>
                        </h5>
                        <h3 className="banner-title text-capitalize">Kitchen Collection</h3>
                        <p>Only until the end of this Week</p>
                        <a href="demo9-shop.html" className="btn btn-dark btn-outline btn-rounded btn-icon-right">
                            Shop Now<i className="w-icon-long-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className="grid-item col-lg-6 height-x1">
                <div className="banner banner-fixed banner-md br-sm">
                    <figure>
                        <Image src="/assets/images/demos/demo9/banner/1-2.jpg" alt="Banner" width="670"
                            height="450" style={{ backgroundColor:'#2D2E32' }} />
                    </figure>
                    <div className="banner-content">
                        <h3 className="banner-title text-white ls-25">
                            Accessories<br/><span className="font-weight-normal ls-normal">Collection</span>
                        </h3>
                        <a href="demo9-shop.html" className="btn btn-white btn-link btn-underline btn-icon-right">
                            Shop Now<i className="w-icon-long-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className="grid-item col-sm-6 col-lg-3 height-x1">
                <div className="banner banner-fixed banner-sm br-sm">
                    <figure>
                        <Image src="/assets/images/demos/demo9/banner/1-3.jpg" alt="Banner" width="330"
                            height="215" style={{ backgroundColor:'#181818' }} />
                    </figure>
                    <div className="banner-content x-50 y-50 w-100 text-center">
                        <h3 className="banner-title font-secondary font-weight-normal mb-0 ls-25">Sale</h3>
                        <div className="banner-price-info font-weight-normal text-white mb-3">
                            Up to <strong className="text-uppercase">20% Off</strong>
                        </div>
                        <a href="demo9-shop.html" className="btn btn-white btn-link btn-underline">Shop
                            Collection</a>
                    </div>
                </div>
            </div>
            <div className="grid-item col-sm-6 col-lg-3 height-x1">
                <div className="banner banner-fixed banner-sm br-sm">
                    <figure>
                        <Image src="/assets/images/demos/demo9/banner/1-4.jpg" alt="Banner" width="330"
                            height="215" style={{ backgroundColor:'#A3A8A6' }} />
                    </figure>
                    <div className="banner-content">
                        <h5 className="banner-subtitle text-uppercase font-weight-bold">20% Off</h5>
                        <h3 className="banner-title text-capitalize ls-25">Kids Store</h3>
                        <a href="demdo9-shop.html" className="btn btn-dark btn-link btn-underline btn-icon-right">
                            Shop Now<i className="w-icon-long-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
