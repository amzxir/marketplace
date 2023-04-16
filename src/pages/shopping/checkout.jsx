import React from 'react'
import Head from 'next/head'
import Footer from '../../../components/footer/footer'
import Header from '../../../components/header/header'
import Form from '../../../components/checkout/form'
import Orders from '../../../components/checkout/orders'
import Link from 'next/link'



export default function Checkout() {
  return (
    <>
        <Head>
            <title>فاکتور - خانه</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Header/>

        <main className="main checkout rtl">
            <nav className="breadcrumb-nav">
                <div className="container">
                    <ul className="breadcrumb shop-breadcrumb bb-no">
                        <li><Link href="/shopping/card">سبد خرید</Link></li>
                        <li className='active'><Link href="/shopping/checkout">فاکتور</Link></li>
                        <li><Link href="/shopping/order">تکمیل خرید</Link></li>
                    </ul>
                </div>
            </nav>

            <div className="page-content">
                <div className="container">
                    <div className="row mb-9">
                        <Form/>
                        <Orders/>
                    </div>
                </div>
            </div>

        </main>

        <Footer/>
    </>
  )
}