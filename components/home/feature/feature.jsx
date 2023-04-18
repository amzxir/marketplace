import React, { useState } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';


export default function Feature() {

    // feature data
    const data = [
        {id:1 , title:'ارسال و مرجوعی رایگان' , name:'برای تمام سفارشات بیش از 99 دلار' , icon:'w-icon-truck'},
        {id:2 , title:'پرداخت امن' , name:'ما پرداخت مطمئن را تضمین می کنیم' , icon:'w-icon-bag'},
        {id:3 , title:'ارسال و مرجوعی رایگان' , name:'پس از 30 روز بازگشت' , icon:'w-icon-money'},
        {id:4 , title:'پشتیبانی مشتری' , name:'با ما تماس بگیرید یا ایمیل 24' , icon:'w-icon-chat'},
    ]
    const [feature , setFeature] = useState(data)

  return (
    <>
        <div className='container'>
            <div className="swiper-container swiper-theme icon-box-wrapper br-sm mb-10">
                <div className="cols-1">
                        <Splide 
                            options={{ 
                                rewind: true,
                                arrows:false,
                                direction:'rtl',
                                autoWidth: true,
                                pagination:false

                            }}
                        >
                            {feature.map((i , index)=> {
                                return(
                                    <SplideSlide key={index} className='ml-5 mr-5'>
                                        <div className="swiper-slide icon-box icon-box-side text-dark">
                                            <span className="icon-box-icon icon-shipping">
                                                <i className={i.icon}></i>
                                            </span>
                                            <div className="icon-box-content">
                                                <h4 className="icon-box-title">{i.title}</h4>
                                                <p className="text-default">{i.name}</p>
                                            </div>
                                        </div>
                                    </SplideSlide>
                                )
                            })}
                        </Splide>
                </div>
            </div>
        </div>
    </>
  )
}

