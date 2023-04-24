import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'


export default function Sidebar({isOpen , setIsOpen}) {

    const data =[
        {id:1 , name:'1 کفش دونده الاستیک' , price:'250.000' , src:'/assets/images/cart/product-1.jpg'},
        {id:2 , name:'2 کفش دونده الاستیک' , price:'220.000' , src:'/assets/images/cart/product-2.jpg'},
    ]
    const [cardProduct , setCardproduct] = useState(data)

  return (
    <>
        <div className={`top-0 right-0 fixed bg-white w-[300px] h-full z-40 p-10 rtl ${isOpen ? 'translate-x-0' :'translate-x-full'} ease-in-out duration-300`}>
            <div className='sidebar-header'>
                <span className='title-slidebar'>سبد خرید</span>
                <a className='text-dark' onClick={()=> setIsOpen(!isOpen)}>
                    <FontAwesomeIcon className='pointer' icon={faX} />
                </a>
            </div>
            <hr className='mt-3 mb-3'/>
            <div className="products">
                {cardProduct.map((i , index)=> {
                    return(
                        <div key={index} className="product product-cart pb-3">
                            <figure className="product-media">
                                <Link href="/single-product">
                                    <img src={i.src} alt="product" height="84" width="94" />
                                </Link>
                            </figure>
                            <button className="btn btn-link btn-close" aria-label="button">
                                <i className="fas fa-times"></i>
                            </button>
                            <div className="product-detail mr-2">
                                <Link href="/single-product" className="product-name">{i.name}</Link>
                                <div className="price-box">
                                    <span className="product-prices">{i.price} تومان</span>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className='cart-total'>
                <label>جمع :</label>
                <span>120.000 تومان</span>
            </div>
            <div className='cart-action'>
                <Link href='/card' className='btn btn-dark btn-outline btn-rounded'>سبد خرید</Link>
                <Link href='/checkout' className='btn btn-primary  btn-rounded'>فاکتور</Link>
            </div>
        </div>
    </>
  )
}
