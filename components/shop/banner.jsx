import Link from 'next/link'
import React from 'react'

export default function Banner() {
  return (
    <>
        <div className="shop-default-banner shop-boxed-banner banner d-flex align-items-center mb-6 br-xs"
            style={{ backgroundImage:'url(/assets/images/demos/demo9/banner/4.jpg)' , background:'#494844' }}>
            <div className="banner-content">
                <h4 className="banner-subtitle font-weight-normal text-uppercase text-white ls-normal">
                    تا <strong className="text-secondary">70%</strong> تخفیف
                </h4>
                <h3 className="banner-title text-white text-capitalize ls-25">مجموعه مد</h3>
                <Link href="/shop" className="btn btn-white btn-rounded btn-icon-right btn-outline"><i className="w-icon-long-arrow-left"></i> اکنون خرید کنید </Link>
            </div>
        </div>
    </>
  )
}
