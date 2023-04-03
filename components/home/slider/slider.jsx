import React from 'react'
import Image from 'next/image'


export default function Slider() {
  return (
    <>
        <section className="intro-section mt-4">
            <div className="swiper-container swiper-theme animation-slider">
                <div className="swiper-wrapper row gutter-no cols-1">
                    <div className="swiper-slide banner banner-fixed content-center intro-slide intro-slide1"
                        style={{ backgroundImage:'url(/assets/images/demos/demo9/slides/slide-1.jpg)' , backgroundColor:'#EEF4F4' }}>
                        <div className="container">
                            <div className="banner-content d-inline-block y-50">
                                <div className="slide-animate">
                                    <h5 className="banner-subtitle text-uppercase font-weight-bold">Deals and Promotions
                                    </h5>
                                    <h3 className="banner-title text-capitalize ls-25">
                                        <span className="text-primary">Winter Season</span><br/>
                                        Fashion Lifestyle Collection
                                    </h3>
                                    <a href="demo9-shop.html"
                                        className="btn btn-dark btn-outline btn-rounded btn-icon-right">
                                        Shop Now<i className="w-icon-long-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                            <figure className="slide-image skrollable slide-animate">
                                <Image src="/assets/images/demos/demo9/slides/slide-image-1.png" alt="Banner"
                                    data-bottom-top="transform: translatex(-10vh);"
                                    data-top-bottom="transform: translateX(10vh);" width="472" height="510"/>
                            </figure>
                        </div>
                    </div>
                    <div className="swiper-slide banner banner-fixed intro-slide intro-slide3 content-center"
                        style={{ backgroundImage:'url(/assets/images/demos/demo9/slides/slide-3.jpg)' , backgroundColor:'#D4D6D5' }}>
                        <div className="container">
                            <div className="banner-content y-50">
                                <div className="content-left mr-auto slide-animate mb-4 mb-lg-0" data-animation-options="{
                                    'name': 'fadeInUpShorter', 'duration': '1s'
                                }">
                                    <h5 className="banner-subtitle text-white br-xs">Only until the end of this Week
                                    </h5>
                                    <h3 className="banner-title text-uppercase font-weight-normal mb-0 ls-25">
                                        Fashion<strong className="ml-2">Sale</strong>
                                    </h3>
                                    <p className="text-dark font-weight-normal text-uppercase mb-0 ls-25">
                                        Up to <strong className="text-uppercase text-secondary font-weight-bolder">80%
                                            Off</strong>
                                    </p>
                                </div>
                                <div className="content-right slide-animate" data-animation-options="{
                                    'name': 'fadeInUpShorter', 'duration': '1s'
                                }">
                                    <h4 className="text-white text-uppercase ls-25">
                                        Chooses to extra comfort all around
                                    </h4>
                                    <a href="demo9-shop.html" className="btn btn-dark btn-rounded btn-icon-right">
                                        Shop Now<i className="w-icon-long-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                            <figure className="slide-image skrollable slide-animate">
                                <Image src="/assets/images/demos/demo9/slides/slide-image-3.png" alt="Banner"
                                    data-bottom-top="transform: translatex(-10vh);"
                                    data-top-bottom="transform: translateX(10vh);" width="488" height="510"/>
                            </figure>
                        </div>
                    </div>
                </div>
                <div className="custom-dots swiper-img-dots">
                    <a href="#" className="active">
                        <Image src="/assets/images/demos/demo9/slides/dot-1.png" alt="Dot" width="70" height="70" />
                    </a>
                    <a href="#">
                        <Image src="/assets/images/demos/demo9/slides/dot-2.png" alt="Dot" width="70" height="70" />
                    </a>
                    <a href="#">
                        <Image src="/assets/images/demos/demo9/slides/dot-3.png" alt="Dot" width="70" height="70" />
                    </a>
                    <a href="#">
                        <Image src="/assets/images/demos/demo9/slides/dot-1.png" alt="Dot" width="70" height="70" />
                    </a>
                    <a href="#">
                        <Image src="/assets/images/demos/demo9/slides/dot-2.png" alt="Dot" width="70" height="70" />
                    </a>
                </div>
            </div>
        </section>
    </>
  )
}
