import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Cards() {

    const data = [
        {id:1 , name:'1 کوله پشتی ساده کلاسیک' , src:'/assets/images/shop/12.jpg' , price1:'120.000' , price2:'140.000' , int:4},
        {id:2 , name:'2 کوله پشتی ساده کلاسیک' , src:'/assets/images/shop/13.jpg' , price1:'120.000' , price2:'140.000' , int:6},
        {id:3 , name:'3 کوله پشتی ساده کلاسیک' , src:'/assets/images/shop/14.jpg' , price1:'120.000' , price2:'140.000' , int:7},
        {id:4 , name:'4 کوله پشتی ساده کلاسیک' , src:'/assets/images/shop/15.jpg' , price1:'120.000' , price2:'140.000' , int:9},
    ]
    const [product , setProduct] = useState(data)

    // count product
    const [countProduct , setCountProduct] = useState(0)

    // function handel increment
    const handelIncrement = () => {
        setCountProduct(countProduct+1)
    }

    // function handel decrease
    const handelDecrease = () => {
        setCountProduct(countProduct-1)
    }

  return (
    <>
        <div className="col-lg-8 pr-lg-4 mb-6">
            <table className="shop-table cart-table">
                <thead>
                    <tr>
                        <th className="product-name"><span>محصول</span></th>
                        <th></th>
                        <th className="product-price"><span>قیمت</span></th>
                        <th className="product-quantity"><span>تعداد</span></th>
                        <th className="product-subtotal"><span>جمع فرعی</span></th>
                    </tr>
                </thead>
                <tbody>
                    {product.map((i , index)=> {
                        return(
                            <tr key={index}>
                                <td className="product-thumbnail">
                                    <div className="p-relative">
                                        <Link href="/single/product">
                                            <figure>
                                                <Image src={i.src} alt="product" width="300" height="338"/>
                                            </figure>
                                        </Link>
                                        <button type="submit" className="btn btn-close"><i className="fas fa-times"></i></button>
                                    </div>
                                </td>
                                <td className="product-name">
                                    <Link href="/single/product">{i.name}</Link>
                                </td>
                                <td className="product-price"><span className="amount">{i.price1} تومان</span></td>
                                <td className="product-quantity">
                                    <div className="input-group">
                                        <input className="quantity form-control" value={i.int} type="number" min="1" max="100000" dir='ltr'/>
                                        <button className="quantity-plus w-icon-plus" onClick={()=> handelIncrement()}></button>
                                        <button className="quantity-minus w-icon-minus" onClick={()=> handelDecrease()}></button>
                                    </div>
                                </td>
                                <td className="product-subtotal">
                                    <span className="amount">{i.price2} تومان</span>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

            <div className="cart-action mb-6">
                <Link href="#" className="btn btn-dark btn-rounded btn-icon-left btn-shopping ml-auto"><i className="w-icon-long-arrow-left"></i> به خرید ادامه دهید</Link>
                <button type="submit" className="btn btn-rounded btn-default btn-clear" name="clear_cart" value="Clear Cart">پاک کردن سبد خرید</button> 
                <button type="submit" className="btn btn-rounded btn-update disabled" name="update_cart" value="Update Cart">به روز رسانی سبد خرید</button>
            </div>
        </div>
    </>
  )
}
