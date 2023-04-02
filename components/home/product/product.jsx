import React from 'react'
import Image from 'next/image'

export default function Product() {
  return (
    <div className='container'>
        <div className="filter-with-title title-underline mb-4 pb-2">
            <h2 className="title">Home &amp; Furnitures</h2>
            <ul className="nav-filters">
                <li><a href="#" className="nav-filter active">All</a></li>
                <li><a href="#" className="nav-filter">Garden Supplies</a></li>
                <li><a href="#" className="nav-filter">Kitchen</a></li>
                <li><a href="#" className="nav-filter">Bathroom</a></li>
                <li><a href="#" className="nav-filter">Decor</a></li>
                <li><a href="#" className="nav-filter">Furniture</a></li>
                <li><a href="#" className="nav-filter">Accessories</a></li>
            </ul>
        </div>
        <div className="row grid cols-xl-5 cols-md-4 cols-sm-3 cols-2 " id="products-1">
            <div className="grid-item">
                <div className="product text-center">
                    <figure className="product-media">
                        <a href="product-default.html">
                            <Image src="/assets/images/demos/demo9/product/6-1.jpg" alt="Product" width="600"
                                height="675" />
                        </a>
                        <div className="product-action-vertical">
                            <a href="#" className="btn-product-icon btn-cart w-icon-cart" title="Add to cart"></a>
                            <a href="#" className="btn-product-icon btn-wishlist w-icon-heart" title="Wishlist"></a>
                            <a href="#" className="btn-product-icon btn-compare w-icon-compare" title="Compare"></a>
                            <a href="#" className="btn-product-icon btn-quickview w-icon-search"
                                title="Quick View"></a>
                        </div>
                    </figure>
                    <div className="product-details">
                        <h3 className="product-name">
                            <a href="product-default.html">Lattice Soft Pillow</a>
                        </h3>
                        <div className="product-price">
                            <ins className="new-price">$73.40</ins>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid-item">
                <div className="product text-center">
                    <figure className="product-media">
                        <a href="product-default.html">
                            <Image src="/assets/images/demos/demo9/product/6-2.jpg" alt="Product" width="600"
                                height="675" />
                        </a>
                        <div className="product-action-vertical">
                            <a href="#" className="btn-product-icon btn-cart w-icon-cart" title="Add to cart"></a>
                            <a href="#" className="btn-product-icon btn-wishlist w-icon-heart" title="Wishlist"></a>
                            <a href="#" className="btn-product-icon btn-compare w-icon-compare" title="Compare"></a>
                            <a href="#" className="btn-product-icon btn-quickview w-icon-search"
                                title="Quick View"></a>
                        </div>
                    </figure>
                    <div className="product-details">
                        <h3 className="product-name">
                            <a href="product-default.html">Comfortable Armchair</a>
                        </h3>
                        <div className="product-price">
                            <ins className="new-price">$290.05</ins><del className="old-price">$302.74</del>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid-item">
                <div className="product text-center">
                    <figure className="product-media">
                        <a href="product-default.html">
                            <Image src="/assets/images/demos/demo9/product/6-3.jpg" alt="Product" width="600"
                                height="675" />
                        </a>
                        <div className="product-action-vertical">
                            <a href="#" className="btn-product-icon btn-cart w-icon-cart" title="Add to cart"></a>
                            <a href="#" className="btn-product-icon btn-wishlist w-icon-heart" title="Wishlist"></a>
                            <a href="#" className="btn-product-icon btn-compare w-icon-compare" title="Compare"></a>
                            <a href="#" className="btn-product-icon btn-quickview w-icon-search"
                                title="Quick View"></a>
                        </div>
                    </figure>
                    <div className="product-details">
                        <h3 className="product-name">
                            <a href="product-default.html">Lantern</a>
                        </h3>
                        <div className="product-price">
                            <ins className="new-price">$108.54</ins>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid-item">
                <div className="product text-center">
                    <figure className="product-media">
                        <a href="product-default.html">
                            <Image src="/assets/images/demos/demo9/product/6-4.jpg" alt="Product" width="600"
                                height="675" />
                        </a>
                        <div className="product-action-vertical">
                            <a href="#" className="btn-product-icon btn-cart w-icon-cart" title="Add to cart"></a>
                            <a href="#" className="btn-product-icon btn-wishlist w-icon-heart" title="Wishlist"></a>
                            <a href="#" className="btn-product-icon btn-compare w-icon-compare" title="Compare"></a>
                            <a href="#" className="btn-product-icon btn-quickview w-icon-search"
                                title="Quick View"></a>
                        </div>
                    </figure>
                    <div className="product-details">
                        <h3 className="product-name">
                            <a href="product-default.html">Morden Table</a>
                        </h3>
                        <div className="product-price">
                            <ins className="new-price">$231.47</ins><del className="old-price">$259.17</del>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid-item">
                <div className="product text-center">
                    <figure className="product-media">
                        <a href="product-default.html">
                            <Image src="/assets/images/demos/demo9/product/6-5.jpg" alt="Product" width="600"
                                height="675" />
                        </a>
                        <div className="product-action-vertical">
                            <a href="#" className="btn-product-icon btn-cart w-icon-cart" title="Add to cart"></a>
                            <a href="#" className="btn-product-icon btn-wishlist w-icon-heart" title="Wishlist"></a>
                            <a href="#" className="btn-product-icon btn-compare w-icon-compare" title="Compare"></a>
                            <a href="#" className="btn-product-icon btn-quickview w-icon-search"
                                title="Quick View"></a>
                        </div>
                    </figure>
                    <div className="product-details">
                        <h3 className="product-name">
                            <a href="product-default.html">Plastic Candle Box</a>
                        </h3>
                        <div className="product-price">
                            <ins className="new-price">$46.16</ins><del className="old-price">$51.29</del>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid-space col-xl-5col col-1"></div>
        </div>
    </div>
  )
}

