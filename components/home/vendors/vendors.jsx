import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Splide, SplideSlide } from '@splidejs/react-splide';



export default function Vendors() {

    // vendors data
    const data = [
        {id:1 , name:'فروشنده 1' , img:'/assets/images/demos/demo9/vendor-logo/1.jpg', int:12,
            src:[
                '/assets/images/demos/demo9/product/4-1.jpg',
                '/assets/images/demos/demo9/product/4-2.jpg',
                '/assets/images/demos/demo9/product/4-3.jpg',
            ]
        },
        {id:2 , name:'فروشنده 2' , img:'/assets/images/demos/demo9/vendor-logo/2.jpg', int:17,
            src:[
                '/assets/images/demos/demo9/product/4-1.jpg',
                '/assets/images/demos/demo9/product/4-2.jpg',
                '/assets/images/demos/demo9/product/4-3.jpg',
            ]
        },
        {id:3 , name:'فروشنده 3' , img:'/assets/images/demos/demo9/vendor-logo/3.jpg', int:29,
            src:[
                '/assets/images/demos/demo9/product/4-1.jpg',
                '/assets/images/demos/demo9/product/4-2.jpg',
                '/assets/images/demos/demo9/product/4-3.jpg',
            ]
        },
        {id:4 , name:'فروشنده 4' , img:'/assets/images/demos/demo9/vendor-logo/1.jpg', int:76,
            src:[
                '/assets/images/demos/demo9/product/4-1.jpg',
                '/assets/images/demos/demo9/product/4-2.jpg',
                '/assets/images/demos/demo9/product/4-3.jpg',
            ]
        },
        {id:5 , name:'فروشنده 5' , img:'/assets/images/demos/demo9/vendor-logo/2.jpg', int:87,
            src:[
                '/assets/images/demos/demo9/product/4-1.jpg',
                '/assets/images/demos/demo9/product/4-2.jpg',
                '/assets/images/demos/demo9/product/4-3.jpg',
            ]
        },
    ]
    const [vendor , setVendor] = useState(data)

  return (
    <div className='container rtl'>
         <h2 className="title title-underline mb-4">فروشندگان هفتگی برتر</h2>
         <div className="swiper-container swiper-theme mb-10 pb-2">
                <Splide
                    options={{ 
                        rewind: true,
                        arrows:false,
                        direction:'rtl',
                        autoWidth: true,
                        pagination:false

                    }}
                    className="swiper-wrapper row cols-1"
                >
                    {vendor.map((i , index)=> {
                        return(
                            <SplideSlide key={index} className='className="swiper-slide vendor-widget mb-0 ml-4 mr-4"'>
                                    <div className="vendor-widget-2">
                                        <div className="vendor-details">
                                            <figure className="vendor-logo">
                                                <Link href="#">
                                                    <Image src={i.img} alt="Vendor Logo" width="70" height="70" />
                                                </Link>
                                            </figure>
                                            <div className="vendor-personal">
                                                <h4 className="vendor-name">
                                                    <Link href="#">{i.name}</Link>
                                                </h4>
                                                <span className="vendor-product-count mr-1">({i.int} محصول)</span>
                                                <div className="ratings-container">
                                                    <div className="ratings-full">
                                                        <span className="ratings" style={{ width:'100%' }}></span>
                                                        <span className="tooltiptext tooltip-top"></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="vendor-products row cols-3 gutter-sm">
                                            {i.src.map((i , index)=> {
                                                return(
                                                    <div key={index} className="vendor-product">
                                                        <figure className="product-media">
                                                            <Link href="#">
                                                                <Image src={i} alt="Vendor Product" width="100" height="113" />
                                                            </Link>
                                                        </figure>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                            </SplideSlide>
                        )
                    })}
                </Splide>
        </div>
    </div>
  )
}

