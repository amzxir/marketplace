import React , {useState} from 'react'
import Link from 'next/link';
import Image from 'next/image'
import { Splide, SplideSlide } from '@splidejs/react-splide';


export default function Sidbar() {

    const data =[
        {id:1 , name:'1ساعت هوشمند' , src:'/assets/images/shop/13.jpg' , price:'120,000 - 140,000'},
        {id:2 , name:'2ساعت هوشمند' , src:'/assets/images/shop/13.jpg' , price:'120,000 - 140,000'},
        {id:3 , name:'3ساعت هوشمند' , src:'/assets/images/shop/10.jpg' , price:'120,000 - 140,000'},
        {id:4 , name:'4ساعت هوشمند' , src:'/assets/images/shop/9.jpg' , price:'120,000 - 140,000'},
        {id:5 , name:'5ساعت هوشمند' , src:'/assets/images/shop/8.jpg' , price:'120,000 - 140,000'},
        {id:6 , name:'6ساعت هوشمند' , src:'/assets/images/shop/8.jpg' , price:'120,000 - 140,000'},
        {id:7 , name:'7ساعت هوشمند' , src:'/assets/images/shop/13.jpg' , price:'120,000 - 140,000'},
    ]

    const [product , setProduct] = useState(data)

  return (
    <>
        <aside className="sidebar product-sidebar sidebar-fixed right-sidebar sticky-sidebar-wrapper">
            <div className="sidebar-overlay"></div>
            <a className="sidebar-close" href="#"><i className="close-icon"></i></a>
            <a href="#" className="sidebar-toggle d-flex d-lg-none"><i className="fas fa-chevron-left"></i></a>
            <div className="sidebar-content scrollable">
                <div className="sticky-sidebar">
                    <div className="widget widget-icon-box mb-6">
                        <div className="icon-box icon-box-side">
                            <span className="icon-box-icon text-dark">
                                <i className="w-icon-truck"></i>
                            </span>
                            <div className="icon-box-content">
                                <h4 className="icon-box-title">ارسال و مرجوعی رایگان</h4>
                                <p>برای تمام سفارشات بیش از 99 تومان</p>
                            </div>
                        </div>
                        <div className="icon-box icon-box-side">
                            <span className="icon-box-icon text-dark">
                                <i className="w-icon-bag"></i>
                            </span>
                            <div className="icon-box-content">
                                <h4 className="icon-box-title">پرداخت امن</h4>
                                <p>ما پرداخت مطمئن را تضمین می کنیم</p>
                            </div>
                        </div>
                        <div className="icon-box icon-box-side">
                            <span className="icon-box-icon text-dark">
                                <i className="w-icon-money"></i>
                            </span>
                            <div className="icon-box-content">
                                <h4 className="icon-box-title">تضمین بازگشت پول</h4>
                                <p>پس از 30 روز بازگشت</p>
                            </div>
                        </div>
                    </div>

                    <div className="widget widget-banner mb-9">
                        <div className="banner banner-fixed br-sm">
                            <figure>
                                <Image src="/assets/images/shop/banner3.jpg" alt="Banner" width="266"
                                    height="220" style={{ backgroundColor:'#1D2D44' }} />
                            </figure>
                            <div className="banner-content">
                                <div className="banner-price-info font-weight-bolder text-white lh-1 ls-25">
                                    40<sup className="font-weight-bold">%</sup><sub className="font-weight-bold text-uppercase ls-25">تخفیف</sub>
                                </div>
                                <h4 className="banner-subtitle text-white font-weight-bolder text-uppercase mb-0">فروش نهایی</h4>
                            </div>
                        </div>
                    </div>

                    <div className="widget widget-products">
                        <div className="title-link-wrapper mb-2">
                            <h4 className="title title-link font-weight-bold">محصولات بیشتر</h4>
                        </div>

                        <div className="swiper nav-top">
                            <div className="swiper-container swiper-theme nav-top">

                                <Splide 
                                    options={{ 
                                        rewind: true,
                                        arrows:false,
                                        direction:'rtl',
                                        autoWidth: true,
                                        pagination:false,
                                        autoplay:true
                                    }}
                                    className="swiper-wrapper"
                                >
                                    {product.map((i , index)=> {
                                        return(
                                        <SplideSlide key={index} className='className="widget-col swiper-slide w-100'>
                                            <div className="product product-widget">
                                                <figure className="product-media">
                                                    <Link href="#">
                                                        <Image src={i.src} alt="Product" width="100" height="113" />
                                                    </Link>
                                                </figure>
                                                <div className="product-details">
                                                    <h4 className="product-name">
                                                        <Link href="#">{i.name}</Link>
                                                    </h4>
                                                    <div className="ratings-container">
                                                        <div className="ratings-full">
                                                            <span className="ratings" style={{ width:'100%' }}></span>
                                                            <span className="tooltiptext tooltip-top"></span>
                                                        </div>
                                                    </div>
                                                    <div className="product-price">{i.price} تومان</div>
                                                </div>
                                            </div>
                                        </SplideSlide>
                                        )
                                    })}
                                </Splide>

                                    

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    </>
  )
}
