import React, { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { Splide, SplideSlide } from '@splidejs/react-splide';



export default function AboutUs() {

    // service data 
    const serviceData = [
        {id:1 , name:'خدمات مشتری' , details:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی'},
        {id:2 , name:'مشاوره آنلاین' , details:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی'},
        {id:3 , name:'مدیریت فروش' , details:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی'},
    ]
    const [service , setService] = useState(serviceData)

    // option data
    const optionData = [
        {id:1 , count:15 , range:'M' , name:'محصولات برای فروش' , details:'لورم ایپسوم متن ساختگی با تولید لورم ایپسوم متن' },
        {id:2 , count:35 , range:'M' , name:'درآمد جامعه' , details:'لورم ایپسوم متن ساختگی با تولید لورم ایپسوم متن' },
        {id:3 , count:55 , range:'M' , name:'خریداران در حال رشد' , details:'لورم ایپسوم متن ساختگی با تولید لورم ایپسوم متن' },
    ]
    const [option , setOption] = useState(optionData)

    // awards data
    const awardsData = [
        {id:1 , title:'لورم ایپسوم متن ساختگی با تولید ' , src:'/assets/images/pages/about_us/1.png'},
        {id:2 , title:'لورم ایپسوم متن ساختگی با تولید ' , src:'/assets/images/pages/about_us/2.png'},
        {id:3 , title:'لورم ایپسوم متن ساختگی با تولید ' , src:'/assets/images/pages/about_us/4.png'},
        {id:4 , title:'لورم ایپسوم متن ساختگی با تولید ' , src:'/assets/images/pages/about_us/4.png'},

    ]
    const [awards , setAwards] = useState(awardsData)

    // team data
    const teamData = [
        {id:1 , name:'لورم ایپسوم 1' , position:'Founder-CEO' , src:'/assets/images/pages/about_us/4.jpg'}, 
        {id:2 , name:'لورم ایپسوم 2' , position:'Founder-Developer' , src:'/assets/images/pages/about_us/5.jpg'}, 
        {id:3 , name:'لورم ایپسوم 3' , position:'Founder-CEO' , src:'/assets/images/pages/about_us/6.jpg'}, 
        {id:4 , name:'لورم ایپسوم 4' , position:'Backend-Developer' , src:'/assets/images/pages/about_us/7.jpg'}, 
    ]
    const [team , setTeam] = useState(teamData)



  return (
    <>
        <Head>
            <title>درباره ما - خانه</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>

        <nav className="breadcrumb-nav rtl">
            <div className="container">
                <ul className="breadcrumb">
                    <li><Link href="/">خانه</Link></li>
                    <li>درباره ما</li>
                </ul>
            </div>
        </nav>
        <div className="page-content rtl mt-5">
            <div className="container-about">
                <section className="introduce mb-10 pb-10">
                    <h2 className="title title-center">
                        ما بازاریابی اختصاصی هستیم<br/>مشاورانی که به رشد کسب و کار شما کمک می کنند
                    </h2>
                    <p className=" mx-auto text-center">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
                    <figure className="br-lg">
                        <Image src="/assets/images/pages/about_us/1.jpg" alt="Banner" 
                            width="1240" height="540" style={{ backgroundColor:'#D0C1AE' }} />
                    </figure>
                </section>

                <section className="customer-service mb-7">
                    <div className="row align-items-center">
                        <div className="col-md-6 pl-lg-8 mb-8">
                            <h2 className="title text-right">ما به صورت مستمر ارائه می دهیم &amp; خدمات مهربانانه برای مشتریان</h2>
                            <div className="accordion accordion-simple accordion-plus">
                                {service.map((i , index)=> {
                                    return(
                                        <div key={index} className="card">
                                            <div className="card-header">
                                                <a href="#collapse3-1" className="collapse">{i.name}</a>
                                            </div>
                                            <div className="card-body expanded" id="collapse3-1">
                                                <p className="mb-0">
                                                    {i.details}
                                                </p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="col-md-6 mb-8">
                            <figure className="br-lg">
                                <Image src="/assets/images/pages/about_us/2.jpg" alt="Banner"
                                    width="610" height="500" style={{ backgroundColor:'#CECECC' }} />
                            </figure>
                        </div>
                    </div>
                </section>

                <section className="count-section mb-10 pb-5">
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
                            {option.map((i , index)=> {
                                return(
                                    <SplideSlide key={index} className="swiper-slide counter-wrap">
                                        <div className="counter text-center">
                                            <span className="count-to">{i.count}</span>
                                            <span>{i.range}+</span>
                                            <h4 className="title title-center">{i.name}</h4>
                                            <p>{i.details}</p>
                                        </div>
                                    </SplideSlide>
                                )
                            })}
                        </Splide>
                    </div>
                </section>
            </div>

            <section className="boost-section pt-10 pb-10">
                <div className="container mt-10 mb-9">
                    <div className="row align-items-center mb-10">
                        <div className="col-md-6 mb-8">
                            <figure className="br-lg">
                                <Image src="/assets/images/pages/about_us/3.jpg" alt="Banner"
                                    width="610" height="450" style={{ backgroundColor:'#9E9DA2' }} />
                            </figure>
                        </div>
                        <div className="col-md-6 pr-lg-8 mb-8">
                            <h4 className="title text-right">ما با بهینه‌سازی پتانسیل رشد مشتریان، امتیاز مشتریان خود را تقویت می‌کنیم</h4>
                            <p className="mb-6">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.</p>
                            <Link href="#" className="btn btn-dark btn-rounded">Visit Our Store</Link>
                        </div>
                    </div>

                    <div className="awards-wrapper">
                        <h4 className="title title-center font-weight-bold mb-10 pb-1 ls-25">جوایز</h4>
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
                                {awards.map((i , index)=> {
                                    return(
                                    <SplideSlide key={index} className="swiper-slide image-box-wrapper" style={{ width:'369.667px' }}>
                                        <div className="image-box text-center">
                                            <figure>
                                                <Image src={i.src} alt="Award Image" width="109" height="105" />
                                            </figure>
                                            <p>{i.title}</p>
                                        </div>
                                    </SplideSlide>
                                    )
                                })}
                            </Splide>
                        </div>
                    </div>
                </div>
            </section>

            <section className="member-section mt-10 pt-9 mb-10 pb-4">
                <div className="container">
                    <h4 className="title title-center mb-3">با تیم ما ملاقات کنید</h4>
                    <p className="text-center mb-8">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم<br/>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
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
                            {team.map((i , index)=> {
                                return(
                                    <SplideSlide key={index} className="swiper-slide member-wrap" style={{ width:'275px' }}>
                                        <figure className="br-lg">
                                            <Image src={i.src} alt="Member" width="295" height="332" />
                                            <div className="overlay">
                                                <div className="social-icons">
                                                    <Link href="#" className="social-icon social-facebook w-icon-facebook"></Link>
                                                    <Link href="#" className="social-icon social-twitter w-icon-twitter"></Link>
                                                    <Link href="#" className="social-icon social-instagram w-icon-instagram"></Link>
                                                </div>
                                            </div>
                                        </figure>
                                        <div className="member-info text-center">
                                            <h4 className="member-name">{i.name}</h4>
                                            <p className="text-uppercase">{i.position}</p>
                                        </div>
                                    </SplideSlide>
                                )
                            })}
                        </Splide>
                    </div>
                </div>
            </section>
        </div>
    </>
  )
}

