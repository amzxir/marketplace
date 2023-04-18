import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Breadcrumb from '../../components/breadcrumb/breadcrumb'



export default function Wishlist() {
  return (
    <>
        <Head>
            <title>علاقه مندی - خانه</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>

        <Breadcrumb 
            childrenOne='علاقه مندی'
            childrenTwo='خانه'
        />

        <main className="main wishlist-page rtl">
            <div className="page-content">
                <div className="container">
                    <h3 className="wishlist-title">لیست علاقه مندی های من</h3>
                    <table className="shop-table wishlist-table">
                        <thead>
                            <tr>
                                <th className="product-name"><span>محصول</span></th>
                                <th></th>
                                <th className="product-price"><span>قیمت</span></th>
                                <th className="product-stock-status"><span>وضعیت</span></th>
                                <th className="wishlist-action">اقدامات</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="product-thumbnail">
                                    <div className="p-relative">
                                        <Link href="/single/product">
                                            <figure>
                                                <Image src="/assets/images/shop/7-1.jpg" alt="product" width="300"
                                                    height="338"/>
                                            </figure>
                                        </Link>
                                        <button type="submit" className="btn btn-close"><i
                                                className="fas fa-times"></i></button>
                                    </div>
                                </td>
                                <td className="product-name">
                                    <Link href="/single/product">
                                      تنه آسمان آبی
                                    </Link>
                                </td>
                                <td className="product-price">
                                    <ins className="new-price">120.000 تومان</ins>
                                </td>
                                <td className="product-stock-status">
                                    <span className="wishlist-in-stock">در انبار</span>
                                </td>
                                <td className="wishlist-action">
                                    <div className="d-lg-flex">
                                        <Link href="/single/product" className="btn btn-quickview btn-outline btn-default btn-rounded btn-sm mb-2 mb-lg-0">مشاهده</Link>
                                        <Link href="/shopping/card" className="btn btn-dark btn-rounded btn-sm mr-lg-2 btn-cart">به سبد خرید اضافه کنید</Link>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="social-links">
                        <label>اشتراک گذاری در:</label>
                        <div className="social-icons social-no-color border-thin">
                            <a href="#" className="social-icon social-facebook w-icon-facebook"></a>
                            <a href="#" className="social-icon social-twitter w-icon-twitter"></a>
                            <a href="#" className="social-icon social-pinterest w-icon-pinterest"></a>
                            <a href="#" className="social-icon social-email far fa-envelope"></a>
                            <a href="#" className="social-icon social-whatsapp fab fa-whatsapp"></a>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </>
  )
}
