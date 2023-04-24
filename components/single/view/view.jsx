import React from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import ImageGallery from 'react-image-gallery';
import Link from 'next/link';



export default function View() {

    const images = [
        {
          original: '/assets/images/products/default/1-800x900.jpg',
          thumbnail: '/assets/images/products/default/1-800x900.jpg',
        },
        {
          original: '/assets/images/products/default/1-800x900.jpg',
          thumbnail: '/assets/images/products/default/1-800x900.jpg',
        },
        {
        original: '/assets/images/products/default/1-800x900.jpg',
        thumbnail: '/assets/images/products/default/1-800x900.jpg',
        },
        {
        original: '/assets/images/products/default/1-800x900.jpg',
        thumbnail: '/assets/images/products/default/1-800x900.jpg',
        },
      ];

  return (
    <>
        <div className="product product-single row rtl">
            <div className="col-md-6 mb-6">
                <div className="product-gallery product-gallery-sticky">
                    <div className="swiper-container nav-inner">
                        <div className="swiper-wrapper row cols-1 gutter-no">
                            <div className="swiper-slide">
                                <figure className="product-image">
                                        <ImageGallery 
                                            items={images}
                                            showNav={false}
                                            isRTL={true}
                                            disableSwipe={false}
                                            showPlayButton={false}
                                        />
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-md-6 mb-4 mb-md-6">
                <div className="product-details">
                    <h1 className="product-title">ساعت مچی مشکی الکترونیکی</h1>
                    <div className="product-bm-wrapper">
                        <figure className="brand">
                            <Image src="/assets/images/products/brand/brand-1.jpg" alt="Brand"
                                width="102" height="48" />
                        </figure>
                        <div className="product-meta">
                            <div className="product-categories">
                                دسته بندی:
                                <span className="product-category"><a href="#">الکترونیکی</a></span>
                            </div>
                            <div className="product-sku">
                                سریال نامبر: <span>MS46891340</span>
                            </div>
                        </div>
                    </div>

                    <hr className="product-divider" />

                    <div className="product-price"><ins className="new-price">200,000 تومان</ins></div>

                    <div className="ratings-container">
                        <div className="ratings-full">
                            <span className="ratings" style={{ width:'80%' }}></span>
                            <span className="tooltiptext tooltip-top"></span>
                        </div>
                        <a href="#product-tab-reviews" className="rating-reviews scroll-to">(3
                            بررسی ها)</a>
                    </div>

                    <div className="product-short-desc">
                        <ul className="list-type-check list-style-none">
                            <li><FontAwesomeIcon icon={faCheck}/> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت </li>
                            <li><FontAwesomeIcon icon={faCheck}/> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</li>
                            <li><FontAwesomeIcon icon={faCheck}/> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده</li>
                        </ul>
                    </div>

                    <hr className="product-divider"/>

                    <div className="product-form product-variation-form product-color-swatch">
                        <label>رنگ:</label>
                        <div className="d-flex align-items-center product-variations">
                            <a href="#" className="color" style={{ backgroundColor:'#ffcc01' }}></a>
                            <a href="#" className="color" style={{ backgroundColor:'#ca6d00' }}></a>
                            <a href="#" className="color" style={{ backgroundColor:'#1c93cb' }}></a>
                            <a href="#" className="color" style={{ backgroundColor:'#ccc' }}></a>
                            <a href="#" className="color" style={{ backgroundColor:'#333' }}></a>
                        </div>
                    </div>
                    <div className="product-form product-variation-form product-size-swatch">
                        <label className="mb-1">سایز:</label>
                        <div className="flex-wrap d-flex align-items-center product-variations">
                            <a href="#" className="size">Small</a>
                            <a href="#" className="size">Medium</a>
                            <a href="#" className="size">Large</a>
                            <a href="#" className="size">Extra Large</a>
                        </div>
                    </div>

                    <div className="product-variation-price">
                        <span></span>
                    </div>

                    <div className="fix-bottom product-sticky-content sticky-content">
                        <div className="product-form container">
                            <div className="product-qty-form" dir='ltr'>
                                <div className="input-group">
                                    <input className="quantity form-control" type="number"/>
                                    <button className="quantity-plus w-icon-plus"></button>
                                    <button className="quantity-minus w-icon-minus"></button>
                                </div>
                            </div>
                            <Link href='/card' className="btn btn-primary btn-cart">
                                <i className="w-icon-cart"></i>
                                <span>افرودن به سبد خرید</span>
                            </Link>
                        </div>
                    </div>

                    <div className="social-links-wrapper">
        
                        <div className="product-link-wrapper d-flex">
                            <Link href="#" className="btn-product-icon btn-wishlist w-icon-heart"><span></span></Link>
                            <Link href="#" className="btn-product-icon btn-compare btn-icon-left w-icon-compare"><span></span></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
