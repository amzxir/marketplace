import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'


export default function Product() {

    const data = [
        {id:1 , name:'محصول شماره 1' , price:16900 , dis:1333 , src:'/assets/images/demos/demo9/product/7-1.jpg'},
        {id:2 , name:'محصول شماره 2' , price:15900 , dis:null , src:'/assets/images/demos/demo9/product/7-2.jpg'},
        {id:3 , name:'محصول شماره 3' , price:19900 , dis:null , src:'/assets/images/demos/demo9/product/7-3.jpg'},
        {id:4 , name:'محصول شماره 4' , price:26900 , dis:5422 , src:'/assets/images/demos/demo9/product/7-4.jpg'},
        {id:5 , name:'محصول شماره 5' , price:66900 , dis:null , src:'/assets/images/demos/demo9/product/7-5.jpg'},
        {id:6 , name:'محصول شماره 6' , price:96900 , dis:null , src:'/assets/images/demos/demo9/product/7-2.jpg'},
        {id:7 , name:'محصول شماره 7' , price:16900 , dis:2432 , src:'/assets/images/demos/demo9/product/7-4.jpg'},
        {id:8 , name:'محصول شماره 8' , price:16900 , dis:null , src:'/assets/images/demos/demo9/product/7-5.jpg'},
    ]

    const [topProduct , setTopProduct] = useState(data)

  return (
    <div className='container rtl'>
        <div className="title-link-wrapper">
            <h2 className="title">محصولات دارای رتبه برتر</h2>
            <Link href="#" className="font-weight-bold ls-25"><i className="w-icon-long-arrow-left"></i> محصولات بیشتر</Link>
        </div>
        <div className="row cols-lg-4 cols-md-3 cols-xs-2 cols-1">
            {topProduct.map((i , index)=> {
                return(
                    <div key={index} className="product-wrap mb-0">
                        <div className="product product-widget">
                            <figure className="product-media">
                                <Link href="/single-product">
                                    <Image src={i.src} alt="Product" width="600" height="675"/>
                                </Link>
                            </figure>
                            <div className="product-details">
                                <h4 className="product-name">
                                    <Link href="/single-product">{i.name}</Link>
                                </h4>
                                <div className="product-price ml-3">{i.price} <small>تومان</small></div>
                                {i.dis === null ? '' : <del className="old-price">{i.dis} <small>تومان</small></del>}  
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

