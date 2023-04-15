import Head from 'next/head'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'

export default function ContactUs() {

  // content data
  const data = [
    {id:1 , title:'آدرس ایمیل' , name:'mail@example.com' , src:'w-icon-envelop-closed'},
    {id:2 , title:'شماره تلفن' , name:'09199954356' , src:'w-icon-headphone'},
    {id:3 , title:'نشانی' , name:'تهران میدان آزادی' , src:'w-icon-map-marker'},
    {id:4 , title:'فکس' , name:'66643578' , src:'w-icon-fax'},
  ]
  const [content , setcontent] = useState(data)

  return (
    <>
        <Head>
            <title>تماس با ما - خانه</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        
        <Header/>

        <nav className="breadcrumb-nav rtl">
            <div className="container">
                <ul className="breadcrumb">
                    <li><Link href="/">خانه</Link></li>
                    <FontAwesomeIcon icon={faAngleLeft} />
                    <li className='mr-1'>درباره ما</li>
                </ul>
            </div>
        </nav>

        <main className="main rtl">
            <div className="page-content contact-us mt-5">
                <div className="container">
                    <section className="content-title-section mb-10">
                        <h3 className="title title-center mb-3">اطلاعات تماس</h3>
                        <p className="text-center">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ </p>
                    </section>

                    <section className="contact-information-section mb-10">
                        <div className=" swiper-container swiper-theme">
                            <div className="swiper-wrapper row cols-xl-4 cols-md-3 cols-sm-2 cols-1">
                              {content.map((i , index)=> {
                                return(
                                  <div key={index} className="swiper-slide icon-box text-center icon-box-primary mb-4">
                                      <span className="icon-box-icon icon-email">
                                          <i className={i.src}></i>
                                      </span>
                                      <div className="icon-box-content">
                                          <h4 className="icon-box-title">{i.title}</h4>
                                          <p>{i.name}</p>
                                      </div>
                                  </div>
                                )
                              })}
                            </div>
                        </div>
                    </section>

                    <hr className="divider mb-10 pb-1"/>

                    <section className="contact-section">
                        <div className="row gutter-lg pb-3">
                            <div className="col-lg-6 mb-8">
                                <h4 className="title mb-3">مردم معمولا اینها را می پرسند</h4>
                                <div className="accordion accordion-bg accordion-gutter-md accordion-border">
                                  <div className="card">
                                        <div className="card-header">
                                            <Link href="#collapse1" className="collapse">چگونه می توانم سفارش خود را لغو کنم؟</Link>
                                        </div>
                                        <div id="collapse1" className="card-body expanded">
                                            <p className="mb-0">
                                              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع 
                                            </p>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header">
                                            <Link href="#collapse1" className="collapse">چگونه می توانم سفارش خود را لغو کنم؟</Link>
                                        </div>
                                        <div id="collapse1" className="card-body collapsed">
                                            <p className="mb-0">
                                              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع 
                                            </p>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header">
                                            <Link href="#collapse1" className="collapse">چگونه می توانم سفارش خود را لغو کنم؟</Link>
                                        </div>
                                        <div id="collapse1" className="card-body collapsed">
                                            <p className="mb-0">
                                              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع 
                                            </p>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header">
                                            <Link href="#collapse1" className="collapse">چگونه می توانم سفارش خود را لغو کنم؟</Link>
                                        </div>
                                        <div id="collapse1" className="card-body collapsed">
                                            <p className="mb-0">
                                              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع 
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 mb-8">
                                <h4 className="title mb-3">برای ما پیام ارسال کنید</h4>
                                <form className="form contact-us-form"طص>
                                    <div className="form-group">
                                        <label for="username">نام و نام خانوادگی</label>
                                        <input type="text" id="username" name="username"
                                            className="form-control"/>
                                    </div>
                                    <div className="form-group">
                                        <label for="email_1">ایمیل</label>
                                        <input type="email" id="email_1" name="email_1"
                                            className="form-control"/>
                                    </div>
                                    <div className="form-group">
                                        <label for="message">پیام</label>
                                        <textarea id="message" name="message" cols="30" rows="5"
                                            className="form-control"></textarea>
                                    </div>
                                    <button className="btn btn-dark btn-rounded">ارسال</button>
                                </form>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </main>

        <Footer/>
    </>
  )
}
