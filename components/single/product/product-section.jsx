import React , {useState} from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import Image from 'next/image'
import Link from 'next/link'



export default function ProductSection() {

    // vendor product data
    const data = [
        {id:1 , name:'مداد چسبنده' , category:'تجهیزات جانبی' , price:'198,000', src:[
            '/assets/images/products/default/1-1.jpg',
            '/assets/images/products/default/1-2.jpg'
        ]},
        {id:2 , name:'مداد چسبنده' , category:'تجهیزات جانبی' , price:'198,000', src:[
            '/assets/images/products/default/4-1.jpg',
            '/assets/images/products/default/4-2.jpg'
        ]},
        {id:3 , name:'مداد چسبنده' , category:'تجهیزات جانبی' , price:'198,000', src:[
            '/assets/images/products/default/1-1.jpg',
            '/assets/images/products/default/1-2.jpg'
        ]},
        {id:4 , name:'مداد چسبنده' , category:'تجهیزات جانبی' , price:'198,000', src:[
            '/assets/images/products/default/4-1.jpg',
            '/assets/images/products/default/4-2.jpg'
        ]},
        {id:5 , name:'مداد چسبنده' , category:'تجهیزات جانبی' , price:'198,000', src:[
            '/assets/images/products/default/1-1.jpg',
            '/assets/images/products/default/1-2.jpg'
        ]},
    ]
    const [vendorProduct , setVendorProduct] = useState(data)

  return (
    <>
        <section className="vendor-product-section">
            <div className="title-link-wrapper mb-4">
                <h4 className="title text-left">محصولات بیشتر از این فروشنده</h4>
                <Link href="#" className="btn btn-dark btn-link btn-slide-right btn-icon-right"><i className="w-icon-long-arrow-left"></i> محصولات بیشتر</Link>
            </div>
            <div className="swiper-container swiper-theme">
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
                        {vendorProduct.map((i , index)=> {
                            return(
                                <SplideSlide key={index} className='swiper-slide product ml-5' style={{ width:'35%' }}>
                                    <figure className="product-media">
                                            <Link href="#">
                                                {i.src.map((i , inedx)=> {
                                                    return(
                                                        <Image key={inedx} src={i} alt="Product" width="300" height="338" />
                                                    )
                                                })}
                                            </Link>
                                            <div className="product-action-vertical">
                                                <Link href="#" className="btn-product-icon btn-cart w-icon-cart" title="Add to cart"></Link>
                                                <Link href="#" className="btn-product-icon btn-wishlist w-icon-heart" title="Add to wishlist"></Link>
                                                <Link href="#" className="btn-product-icon btn-compare w-icon-compare" title="Add to Compare"></Link>
                                            </div>
                                            <div className="product-action">
                                                <Link href="#" className="btn-product btn-quickview">مشاهده</Link>
                                            </div>
                                    </figure>
                                    <div className="product-details">
                                        <div className="product-cat"><Link href="#">{i.category}</Link></div>
                                        <h4 className="product-name"><Link href="#">{i.name}</Link>
                                        </h4>
                                        <div className="ratings-container">
                                            <div className="ratings-full">
                                                <span className="ratings" style={{ width:'100%' }}></span>
                                                <span className="tooltiptext tooltip-top"></span>
                                            </div>
                                            <a href="product-default.html" className="rating-reviews">(3 بررسی ها)</a>
                                        </div>
                                        <div className="product-pa-wrapper">
                                            <div className="product-price">{i.price} تومان</div>
                                        </div>
                                    </div>
                                </SplideSlide>
                            )
                        })}
                        
                    </Splide>
            </div>
        </section>
    </>
  )
}
