import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Splide, SplideSlide } from '@splidejs/react-splide';

export default function Product({titleProduct}) {

    // product data
    const data =[
        {id:1 , name:'محصول شماره 1' , price:14000 , dis:null , src:'/assets/images/demos/demo9/product/6-1.jpg'},
        {id:2 , name:'محصول شماره 2' , price:18999 , dis:7136 , src:'/assets/images/demos/demo9/product/6-2.jpg'},
        {id:3 , name:'محصول شماره 3' , price:12888 , dis:null , src:'/assets/images/demos/demo9/product/6-3.jpg'},
        {id:4 , name:'محصول شماره 4' , price:14000 , dis:2322 , src:'/assets/images/demos/demo9/product/6-4.jpg'},
        {id:5 , name:'محصول شماره 5' , price:71236 , dis:null , src:'/assets/images/demos/demo9/product/6-5.jpg'},
        {id:6 , name:'محصول شماره 6' , price:14000 , dis:4455 , src:'/assets/images/demos/demo9/product/6-2.jpg'},
        {id:7 , name:'محصول شماره 7' , price:82347 , dis:null , src:'/assets/images/demos/demo9/product/6-4.jpg'},
    ]
    const [product , setProduct] = useState(data)

  return (
    <div className='container rtl'>
        <div className="filter-with-title title-underline mb-4 pb-2">
            <h2 className="title">{titleProduct}</h2>
        </div>
            <Splide 
                options={{ 
                    rewind: true,
                    arrows:false,
                    direction:'rtl',
                    autoWidth: true,
                    pagination:false

                }}
                className="row grid"
                id="products-1"
            >

                {product.map((i , index)=> {
                    return(
                        <SplideSlide key={index} className="grid-item">
                            <div className="product text-center">
                                <figure className="product-media">
                                    <Link href="/single/product">
                                        <Image src={i.src} alt="Product" width="600" height="675" />
                                    </Link>
                                    <div className="product-action-vertical">
                                        <Link href="#" className="btn-product-icon btn-cart w-icon-cart" title="Add to cart"></Link>
                                        <Link href="#" className="btn-product-icon btn-wishlist w-icon-heart" title="Wishlist"></Link>
                                        <Link href="#" className="btn-product-icon btn-compare w-icon-compare" title="Compare"></Link>
                                        <Link href="#" className="btn-product-icon btn-quickview w-icon-search" title="Quick View"></Link>
                                    </div>
                                </figure>
                                <div className="product-details">
                                    <h3 className="product-name">
                                        <a href="product-default.html">{i.name}</a>
                                    </h3>
                                    <div className="product-price">
                                        <ins className="new-price ml-3">{i.price} <small>تومان</small></ins>
                                        {i.dis === null ? '' : <del className="old-price">{i.dis} <small>تومان</small></del>}  
                                    </div>
                                </div>
                            </div>
                        </SplideSlide>
                    )
                })}
            </Splide>
    </div>
  )
}

