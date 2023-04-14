import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import Single from 'components/single/single'
import Footer from 'components/footer/footer'
import Header from 'components/header/header'

export default function Product() {
  return (
    <>
        <Head>
            <title>فروشگاه - مشاهده محصول</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Header/>
        <nav className="breadcrumb-nav rtl">
            <div className="container">
                <ul className="breadcrumb">
                    <li><Link href="/">خانه</Link></li>
                    <FontAwesomeIcon icon={faAngleLeft} />
                    <li className='mr-1'>مشاهده محصول</li>
                </ul>
            </div>
        </nav>
        <Single/>
        <Footer/>
    </>
  )
}
