import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Splide, SplideSlide } from '@splidejs/react-splide';


export default function Slider() {

    // slider data
    const data = [
        {id:1 , title:'معاملات و تبلیغات' , name:'مجموعه سبک زندگی مد فصل زمستان' , src:'/assets/images/demos/demo9/slides/slide-image-1.png'},
        {id:2 , title:'فقط تا پایان این هفته' , name:'مجموعه سبک زندگی مد فصل زمستان' , src:'/assets/images/demos/demo9/slides/slide-image-3.png'},
    ]
    const [slider , setSlider] = useState(data)

  return (
    <>
        <section className="intro-section mt-4">
            <div className="swiper-container swiper-theme animation-slider">
                <div className="swiper-wrapper row gutter-no cols-1">
                    <Splide 
                        options={{ 
                            rewind: true,
                            arrows:false,
                            direction:'rtl'
                        }}
                    >
                        {slider.map((i , index)=> {
                            return(
                                <SplideSlide key={index}>
                                    <div className="swiper-slide banner banner-fixed content-center intro-slide intro-slide1" style={{ backgroundImage:'url(/assets/images/demos/demo9/slides/slide-1.jpg)' , backgroundColor:'#D4D6D5' }}>
                                        <div className="container">
                                            <div className="banner-content d-inline-block y-50">
                                                <div className="slide-animate">
                                                    <h5 className="banner-subtitle text-uppercase font-weight-bold">{i.title}</h5>
                                                    <h3 className="banner-title text-capitalize ls-25">{i.name}</h3>
                                                    <Link href="#" className="btn btn-dark btn-outline btn-rounded btn-icon-right"><i className="w-icon-long-arrow-left"></i> اکنون خرید کنید</Link>
                                                </div>
                                            </div>
                                            <figure className="slide-image skrollable slide-animate">
                                                <Image src={i.src} alt="Banner" width="472" height="510"/>
                                            </figure>
                                        </div>
                                    </div>
                                </SplideSlide>
                            )
                        })}
                    </Splide>
                </div>
                {/* <div className="custom-dots swiper-img-dots">
                    <a id='testimonial-splide'>
                        <Image src="/assets/images/demos/demo9/slides/dot-1.png" alt="Dot" width="70" height="70" />
                    </a>
                    <a id='testimonial-splide'>
                        <Image src="/assets/images/demos/demo9/slides/dot-2.png" alt="Dot" width="70" height="70" />
                    </a>
                </div> */}
            </div>
        </section>
    </>
  )
}
