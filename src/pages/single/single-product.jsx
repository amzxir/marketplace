import Single from 'components/single/single'
import Image from 'next/image'
import React from 'react'

export default function SingleProduct() {
  return (
    <div>
            {/* <nav class="breadcrumb-nav container">
                <ul class="breadcrumb bb-no">
                    <li><a href="demo1.html">Home</a></li>
                    <li>Products</li>
                </ul>
                <ul class="product-nav list-style-none">
                    <li class="product-nav-prev">
                        <a href="#">
                            <i class="w-icon-angle-left"></i>
                        </a>
                        <span class="product-nav-popup">
                            <Image src="/assets/images/products/product-nav-prev.jpg" alt="Product" width="110" height="110" />
                            <span class="product-name">Soft Sound Maker</span>
                        </span>
                    </li>
                    <li class="product-nav-next">
                        <a href="#">
                            <i class="w-icon-angle-right"></i>
                        </a>
                        <span class="product-nav-popup">
                            <Image src="/assets/images/products/product-nav-next.jpg" alt="Product" width="110"
                                height="110" />
                            <span class="product-name">Fabulous Sound Speaker</span>
                        </span>
                    </li>
                </ul>
            </nav> */}
            <Single/>
    </div>
  )
}
