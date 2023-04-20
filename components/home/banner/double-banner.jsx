import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'



export default function DoubleBanner() {

    const data = [
        {id:1 , title:'تازه رسیده ها' , name:'ایرفون فلش بی سیم' , src:'/assets/images/demos/demo9/banner/2-1.jpg'},
        {id:2 , title:'تازه رسیده ها' , name:'ایرفون فلش' , src:'/assets/images/demos/demo9/banner/1-2.jpg'},
    ]
    const [banner , setBanner] = useState(data)

  return (
    <div className='container rtl'>
        <div className="row cols-md-2 mb-6">
            {banner.map((i , index)=> {
                return(
                    <div key={index} className="banner banner-fixed category-banner mb-4">
                        <figure className="br-sm">
                            <Image src={i.src} alt="Category Banner" width="640" height="200" style={{ backgroundColor:'#32373B' }} />
                        </figure>
                        <div className="banner-content y-50">
                            <h5 className="banner-subtitle text-uppercase text-secondary font-weight-bold">{i.title}</h5>
                            <h3 className="banner-title text-white text-capitalize font-weight-normal mb-5 ls-25">
                                {i.name}
                            </h3>
                            <Link href="/shop" className="btn btn-white btn-link btn-underline btn-icon-right">
                                <i className="w-icon-long-arrow-left"></i> Shop Now
                            </Link>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}
