import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Splide, SplideSlide } from '@splidejs/react-splide';



export default function Product() {

    // Discount Product data
    const dataDiscount = [
        {id:1 , name:'محصول شماره 1' , price:'120000' , dis:null , img:[
            '/assets/images/demos/demo9/product/5-1-1.jpg',
            '/assets/images/demos/demo9/product/5-1-2.jpg',

        ]},
        {id:2 , name:'محصول شماره 2' , price:'160000' , dis:'7470' , img:[
            '/assets/images/demos/demo9/product/5-2-1.jpg',
            '/assets/images/demos/demo9/product/5-2-2.jpg',

        ]},
        {id:3 , name:'محصول شماره 3' , price:'123443' , dis:null , img:[
            '/assets/images/demos/demo9/product/5-1-1.jpg',
            '/assets/images/demos/demo9/product/5-1-2.jpg',

        ]},
    ]
    const [discountProduct , setDicsountProduct] = useState(dataDiscount)

    // Featured Product data
    const dataFeatured = [
        {id:1 , name:'محصول شماره 1' , price:'120000' , dis:null , img:[
            '/assets/images/demos/demo9/product/5-1-1.jpg',
            '/assets/images/demos/demo9/product/5-1-2.jpg',

        ]},
        {id:2 , name:'محصول شماره 2' , price:'160000' , dis:'7470' , img:[
            '/assets/images/demos/demo9/product/5-2-1.jpg',
            '/assets/images/demos/demo9/product/5-2-2.jpg',

        ]},
        {id:3 , name:'محصول شماره 3' , price:'123443' , dis:null , img:[
            '/assets/images/demos/demo9/product/5-1-1.jpg',
            '/assets/images/demos/demo9/product/5-1-2.jpg',

        ]},
        {id:4 , name:'محصول شماره 4' , price:'123443' , dis:null , img:[
            '/assets/images/demos/demo9/product/5-3.jpg',
            '/assets/images/demos/demo9/product/5-1-2.jpg',

        ]},
        {id:5 , name:'محصول شماره 5' , price:'123443' , dis:null , img:[
            '/assets/images/demos/demo9/product/5-1-1.jpg',
            '/assets/images/demos/demo9/product/5-1-2.jpg',

        ]},
        {id:6 , name:'محصول شماره 6' , price:'123443' , dis:null , img:[
            '/assets/images/demos/demo9/product/5-1-1.jpg',
            '/assets/images/demos/demo9/product/5-1-2.jpg',

        ]},
    ]
    const [featured , setFeatured] = useState(dataFeatured)
    
    // state tabs
    const [toggleState, setToggleState] = useState(1);

    // handel toggletab
    const toggleTab = (index) => {
      setToggleState(index)
    }

    // states timer end
    const [partyTime, setPartyTime] = useState(false);
    // states timer
    const [days , setDays] = useState(0)
    const [hours , setHours] = useState(0)
    const [minutes , setMinutes] = useState(0)
    const [seconds , setSeconds] = useState(0)

    useEffect(() =>{

        const target = new Date("4/19/2023 23:59:59")

        const interval = setInterval(()=> {

            const now = new Date()
            const difference = target.getTime()-now.getTime()

            const d = Math.floor(difference / (1000*60*60*24))
            setDays(d)

            const h = Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            )
            setHours(h)

            const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
            setMinutes(m)

            const s = Math.floor((difference % (1000 * 60)) / 1000)
            setSeconds(s)

            if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
                setPartyTime(true);
            }

        } , 1000)

        return () => clearInterval(interval)
    },[])

  return (
    <div className='container rtl'>
        <div className="row">
            <div className="col-lg-4 col-md-5 mb-6">
                <div className="product-lg br-sm">
                    <h2 className="title title-underline mb-4">معاملات هفته</h2>
                    <div className="swiper">
                        <div className="swiper-container swiper-theme nav-top swiper-nav-md ">
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
                                {discountProduct.map((i , index)=> {
                                    return(
                                        <SplideSlide key={index} className='swiper-slide product text-center w-100'>
                                            <figure className="product-media">
                                                <Link href="/single/product">
                                                    {i.img.map((i , index)=> {
                                                        return(
                                                            <Image key={index} src={i} alt="Product" width="800" height="900" />
                                                        )
                                                    })}
                                                </Link>
                                                <div className="product-action-vertical">
                                                    <Link href="#" className="btn-product-icon btn-cart w-icon-cart" title="Add to cart"></Link>
                                                    <Link href="#" className="btn-product-icon btn-wishlist w-icon-heart" title="Wishlist"></Link>
                                                    <Link href="#" className="btn-product-icon btn-compare w-icon-compare" title="Compare"></Link>
                                                    <Link href="#" className="btn-product-icon btn-quickview w-icon-search" title="Quick View"></Link>
                                                </div>
                                            </figure>
                                            <div className="product-details">
                                                <h3 className="product-name"><Link href="#">{i.name}</Link></h3>
                                                <div className="product-price">
                                                    <ins className="new-price ml-3">{i.price} <small>تومان</small></ins>
                                                    {i.dis === null ? '' : <del className="old-price">{i.dis} <small>تومان</small></del>}  
                                                </div>
                                            </div>
                                        </SplideSlide>
                                    )
                                })}
                            </Splide>
                        </div>
                    </div>

                    <div className="swiper-slide product-countdown-container">
                        <div className="countdown-lable mr-3 mb-2">
                            <h4 className="font-weight-bold ls-10">عجله کن!</h4>
                            <label className="text-dark">پایان پیشنهاد در:</label>
                        </div>
                        <div className="swiper-slide product-countdown countdown-compact mb-2">
                            <span className='countdown-row countdown-show4'>
                                <span className='countdown-section'><span className='countdown-amount'>{days}</span><span className='countdown-period'>روز</span></span>
                                <span className='countdown-section'><span className='countdown-amount'>{hours}</span><span className='countdown-period'>ساعت</span></span>
                                <span className='countdown-section'><span className='countdown-amount'>{minutes}</span><span className='countdown-period'>دقیقه</span></span>
                                <span className='countdown-section'><span className='countdown-amount'>{seconds}</span><span className='countdown-period'>ثانیه</span></span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-8 col-md-7 mb-6">
                <div className="tab tab-nav-underline tab-nav-center">
                    <ul className="nav nav-tabs justify-content-center" role="tablist">
                        <li className="nav-item">
                            <a
                            onClick={() => toggleTab(1)}
                            className={toggleState === 1 ? "nav-link active" : "nav-link"}
                            >ویژه</a>
                        </li>
                        <li className="nav-item">
                            <a 
                            onClick={() => toggleTab(2)}
                            className={toggleState === 2 ? "nav-link active" : "nav-link"}
                            >حراج</a>
                        </li>
                    </ul>
                </div>

                <div className="tab-content">
                    <div
                    className={toggleState === 1 ? "tab-pane active" : "tab-pane"}
                    >
                        <div className="swiper-container swiper-theme">
                            <div className="swiper-wrapper row cols-lg-4 cols-sm-3 cols-2">
                                {featured.map((i , index)=> {
                                    return(
                                        <div key={index} className="product text-center">
                                            <figure className="product-media">
                                                <Link href="/single/product">
                                                    {i.img.map((i , index)=> {
                                                        return(
                                                            <Image key={index} src={i} alt="Product" width="800" height="900" />
                                                        )
                                                    })}
                                                </Link>
                                                <div className="product-action-vertical">
                                                    <a href="#" className="btn-product-icon btn-cart w-icon-cart" title="Add to cart"></a>
                                                    <a href="#" className="btn-product-icon btn-wishlist w-icon-heart" title="Wishlist"></a>
                                                    <a href="#" className="btn-product-icon btn-compare w-icon-compare" title="Compare"></a>
                                                    <a href="#" className="btn-product-icon btn-quickview w-icon-search" title="Quick View"></a>
                                                </div>
                                            </figure>
                                            <div className="product-details">
                                                <h3 className="product-name">
                                                    <a href="product-default.html">{i.name}</a>
                                                </h3>
                                                <div className="product-price">
                                                    <ins className="new-price">{i.price} <small>تومان</small></ins><br />
                                                    {i.dis === null ? '' :  <del className="old-price">{i.dis} <small>تومان</small></del>}
                                                   
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <div
                    className={toggleState === 2 ? "tab-pane active" : "tab-pane"}
                    >
                        <div className="swiper-container swiper-theme">
                            <div className="swiper-wrapper row cols-xl-4 cols-lg-3 cols-md-2">
                                {discountProduct.map((i , index)=> {
                                    return(
                                        <div key={index} className="product text-center">
                                            <figure className="product-media">
                                                <Link href="#">
                                                    {i.img.map((i , index)=> {
                                                        return(
                                                            <Image key={index} src={i} alt="Product" width="800" height="900" />
                                                        )
                                                    })}
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
                                                    <Link href="#">{i.name}</Link>
                                                </h3>
                                                <div className="product-price">
                                                    <ins className="new-price">{i.price} <small>تومان</small></ins>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
