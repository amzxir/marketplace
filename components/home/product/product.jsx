import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { useAppContext } from '@/context/state';
import ImageGallery from 'react-image-gallery';
import Modal from 'components/modal/modal';


export default function Product({titleProduct}) {

    const {openModal , setOpenModal} = useAppContext()

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

    // state for index product
    const [indexProduct , setIndexProduct] = useState()

    // handel open modal
    const handelOpenModal = (index) => {
        setOpenModal(index)
        setIndexProduct(index)
    }


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
                                        <Link href="/shopping/card" className="btn-product-icon btn-cart w-icon-cart" title="Add to cart"></Link>
                                        <Link href="/wishlist" className="btn-product-icon btn-wishlist w-icon-heart" title="Wishlist"></Link>
                                        <Link href="/compare" className="btn-product-icon btn-compare w-icon-compare" title="Compare"></Link>
                                        <a onClick={()=> handelOpenModal(index)} className="btn-product-icon btn-quickview w-icon-search" title="Quick View"></a>
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
            
            <Modal show={openModal === indexProduct}>
                <div className="product product-single product-popup">
                    <div className="row gutter-lg overlay-auto">
                        <div className="col-md-6 mb-4 mb-md-0">
                            <div className="product-gallery product-gallery-sticky">
                                <div className="swiper-container product-single-swiper swiper-theme nav-inner">
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
                        <div className="col-md-6 overflow-hidden p-relative">
                            <div className="pl-0">
                                <h2 className="product-title">ساعت مچی مشکی الکترونیکی</h2>
                                <div className="product-bm-wrapper">
                                    <figure className="brand">
                                        <Image src="/assets/images/products/brand/brand-1.jpg" alt="Brand" width="102" height="48" />
                                    </figure>
                                    <div className="product-meta">
                                        <div className="product-categories"> دسته بندی: <span className="product-category"><a>الکترونیک</a></span>
                                        </div>
                                        <div className="product-sku">
                                            سریال: <span>MS46891340</span>
                                        </div>
                                    </div>
                                </div>

                                <hr className="product-divider"/>

                                <div className="product-price">120.000 تومان</div>

                                <div className="ratings-container">
                                    <div className="ratings-full">
                                        <span className="ratings" style={{ width:'80%' }}></span>
                                        <span className="tooltiptext tooltip-top"></span>
                                    </div>
                                    <a className="rating-reviews">(3 بررسی ها)</a>
                                </div>

                                <div className="product-short-desc">
                                    <ul className="list-type-check list-style-none">
                                        <li>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ است</li>
                                        <li>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ است</li>
                                        <li>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ است</li>
                                        <li>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ است</li>
                                        <li>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ است</li>
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

                                <div className="product-form">
                                    <div className="product-qty-form">
                                        <div className="input-group" dir='ltr'>
                                            <input className="quantity form-control" type="number" min="1" max="10000000"/>
                                            <button className="quantity-plus w-icon-plus"></button>
                                            <button className="quantity-minus w-icon-minus"></button>
                                        </div>
                                    </div>
                                    <button className="btn btn-primary btn-cart">
                                        <i className="w-icon-cart"></i>
                                        <span>افرودن به سبد خرید</span>
                                    </button>
                                </div>

                                <div className="social-links-wrapper">
                                    <div className="social-links">
                                        <div className="social-icons social-no-color border-thin">
                                            <a href="#" className="social-icon social-facebook w-icon-facebook"></a>
                                            <a href="#" className="social-icon social-twitter w-icon-twitter"></a>
                                            <a href="#" className="social-icon social-pinterest fab fa-pinterest-p"></a>
                                            <a href="#" className="social-icon social-whatsapp fab fa-whatsapp"></a>
                                            <a href="#" className="social-icon social-youtube fab fa-linkedin-in"></a>
                                        </div>
                                    </div>
                                    <span className="divider d-xs-show"></span>
                                    <div className="product-link-wrapper d-flex">
                                        <a href="#" className="btn-product-icon btn-wishlist w-icon-heart"><span></span></a>
                                        <a href="#"
                                            className="btn-product-icon btn-compare btn-icon-left w-icon-compare"><span></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>

    </div>
  )
}

