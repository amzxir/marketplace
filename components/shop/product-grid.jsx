import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'



export default function ProductGrid({product , setProduct}) {

  return (
    <>

        <div className="product-wrapper row cols-lg-4 cols-md-3 cols-sm-2 cols-2">

            {product.map((i , index)=> {
                return(
                    <div key={index} className="product-wrap">
                        <div className="product text-center">
                            <figure className="product-media">
                                <Link href="/single/product">
                                    <Image src={i.src} alt="Product" width="800" height="900" />
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
                                    <Link href="/single/product">{i.name}</Link>
                                </h3>
                                <div className="product-price">
                                    <ins className="new-price">{i.price}</ins>
                                    {i.dis === null ? '':  <del className="old-price">{i.dis}</del> }
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}

        </div>
    </>
  )
}
