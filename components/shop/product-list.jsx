import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


export default function ProductList({product , setProduct}) {
  return (
    <>
        <div className="product-wrapper row cols-1">
            {product.map((i , index)=> {
                return(
                    <div key={index} className="product product-list">
                        <figure className="product-media">
                            <Link href="/single/product">
                                <Image src={i.src} alt="Product" width="330" height="338" />
                            </Link>
                            <div className="product-action-vertical">
                                <Link href="#" className="btn-product-icon btn-quickview w-icon-search" title="Quick View"></Link>
                            </div>
                        </figure>
                        <div className="product-details">
                            <div className="product-cat">
                                <a>{i.category}</a>
                            </div>
                            <h4 className="product-name">
                                <Link href="/single/product">{i.name}</Link>
                            </h4>
                            <div className="ratings-container">
                                <div className="ratings-full">
                                    <span className="ratings" style={{ width:'100%' }}></span>
                                    <span className="tooltiptext tooltip-top"></span>
                                </div>
                                <Link href="/single/product" className="rating-reviews">(3 Reviews)</Link>
                            </div>
                            <div className="product-price">{i.price} {i.dis === null ? '' : '-'} {i.dis} تومان</div>
                            <div className="product-desc">
                                {i.des}
                            </div>
                            <div className="product-action">
                                <Link href="/single/product" className="btn-product btn-cart" title="Add to Cart"><i className="w-icon-cart"></i>مشاهده</Link>
                                <Link href="#" className="btn-product-icon btn-wishlist w-icon-heart" title="Add to wishlist"></Link>
                                <Link href="#" className="btn-product-icon btn-compare w-icon-compare" title="Compare"></Link>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    </>
  )
}
