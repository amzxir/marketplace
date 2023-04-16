import React, { useState } from 'react'

export default function Totals() {

    // shipping data
    const data =[
        {id:1 , label:'ارسال رایگان'},
        {id:2 , label:'وانت محلی'},
        {id:3 , label:'نرخ ثابت: 100.000'},
    ]
    const [shipping , setShipping] = useState(data)

  return (
    <>
        <div className="col-lg-4 sticky-sidebar-wrapper">
            <div className="sticky-sidebar">
                <div className="cart-summary mb-4">
                    <h3 className="cart-title text-uppercase">مجموع سبد خرید</h3>
                    <div className="cart-subtotal d-flex align-items-center justify-content-between">
                        <label className="ls-25">جمع فرعی</label>
                        <span>120.000 تومان</span>
                    </div>

                    <hr className="divider"/>

                    <ul className="shipping-methods mb-2">
                        <li><label className="shipping-title text-dark font-weight-bold">حمل</label></li>
                        {shipping.map((i , index)=> {
                            return(
                                <li key={index}> 
                                    <div className="custom-radio">
                                        <input type="radio" id="free-shipping" className="custom-control-input" name="shipping"/>
                                        <label for="free-shipping" className="custom-control-label color-dark">{i.label} تومان</label>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>

                    <div className="shipping-calculator">

                        <form className="shipping-calculator-form">
                            <div className="form-group">
                                <div className="select-box">
                                    <select name="country" className="form-control form-control-md">
                                        <option value="default" selected="selected">کشور</option>
                                        <option value="us">ایران</option>
                                        <option value="uk">تزکیه</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="select-box">
                                    <select name="state" className="form-control form-control-md">
                                        <option value="default" selected="selected">استان</option>
                                        <option value="ohaio">تهران</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group">
                                <input className="form-control form-control-md" type="text" name="town-city" placeholder="Town / City"/>
                            </div>
                            <div className="form-group">
                                <input className="form-control form-control-md" type="text" name="zipcode" placeholder="ZIP"/>
                            </div>
                            <button type="submit" className="btn btn-dark btn-outline btn-rounded">به روز رسانی مجموع</button>
                        </form>
                    </div>

                    <hr className="divider mb-6"/>
                    <div className="order-total d-flex justify-content-between align-items-center">
                        <label>جمع</label>
                        <span className="ls-50">120.000 تومان</span>
                    </div>
                    <a href="#"
                        className="btn btn-block btn-dark btn-icon-right btn-rounded  btn-checkout"><i className="w-icon-long-arrow-left"></i> برای تسویه حساب اقدام کنید</a>
                </div>
            </div>
        </div>
    </>
  )
}
