import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function BoxWrapper() {
  return (
    <div className='container rtl'>
        <div className="row grid grid-float pt-2 banner-grid mb-9">
            <div className="grid-item col-lg-6 height-x2">
                <div className="banner banner-fixed banner-lg br-sm">
                    <figure>
                        <Image src="/assets/images/demos/demo9/banner/1-1.jpg" alt="Banner" width="670"
                            height="450" style={{ backgroundColor:'#E3E7EA' }} />
                    </figure>
                    <div className="banner-content y-50">
                        <h5 className="banner-subtitle text-capitalize font-weight-normal mb-0 ls-25">
                            فروش فلش <strong className="text-secondary text-uppercase">50 درصد تخفیف</strong>
                        </h5>
                        <h3 className="banner-title text-capitalize">مجموعه آشپزخانه</h3>
                        <p>فقط تا پایان این هفته</p>
                        <Link href="#" className="btn btn-dark btn-outline btn-rounded btn-icon-right">
                            <i className="w-icon-long-arrow-left"></i> اکنون خرید کنید
                        </Link>
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
                            تجهیزات جانبی<br/><span className="font-weight-normal ls-normal">مجموعه</span>
                        </h3>
                        <Link href="#" className="btn btn-white btn-link btn-underline btn-icon-right">
                            <i className="w-icon-long-arrow-left"></i> اکنون خرید کنید
                        </Link>
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
                        <h3 className="banner-title font-secondary font-weight-normal mb-4 ls-25">فروش</h3>
                        <div className="banner-price-info font-weight-normal text-white mb-3">
                            تا <strong className="text-uppercase">20% تخفیف</strong>
                        </div>
                        <Link href="#" className="btn btn-white btn-link btn-underline">فروشگاه مجموعه</Link>
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
                        <h5 className="banner-subtitle text-uppercase font-weight-bold">20% تخفیف</h5>
                        <h3 className="banner-title text-capitalize ls-25">فروشگاه کودکان</h3>
                        <Link href="#" className="btn btn-dark btn-link btn-underline btn-icon-right">
                            <i className="w-icon-long-arrow-left"></i> اکنون خرید کنید
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
