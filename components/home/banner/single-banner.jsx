import React from 'react'
import Link from 'next/link'
export default function Banner() {
  return (
    <div className='container'>
        <div className="sale-banner banner br-sm">
            <div className="banner-content">
                <div className="content-right">
                    <Link href="#" className="btn btn-white btn-rounded">
                        همین الان خرید کن
                        <i className="w-icon-long-arrow-left"></i>
                    </Link>
                    <h3 className="banner-title text-uppercase font-weight-normal mb-4 mb-md-0 ls-25 text-white">
                        <span>
                            <strong className="mr-10 pr-lg-10">لوازم الکترونیکی دوست داشتنی شما فقط برای پرداخت</strong>
                            <strong className="mr-10 pr-lg-10">لوازم الکترونیکی دوست داشتنی شما فقط برای پرداخت</strong>
                            <strong className="mr-10 pr-lg-10">لوازم الکترونیکی دوست داشتنی شما فقط برای پرداخت</strong>
                        </span>
                    </h3>
                </div>
                <h4 className="content-left banner-subtitle text-uppercase mb-8 mb-md-0 mr-0 mr-md-4 text-secondary ls-25 rtl">
                    <span className="text-dark font-weight-bold lh-1 ls-normal">تا</span>20 درصد فروش!
                </h4>
            </div>
        </div>
    </div>
  )
}

