import Image from 'next/image'
import React from 'react'

export default function Details() {
  return (
    <>
        <div className="tab tab-nav-boxed tab-nav-underline product-tabs">
            <ul className="nav nav-tabs" role="tablist">
                <li className="nav-item">
                    <a href="#product-tab-description" className="nav-link active">توضیحات</a>
                </li>
                <li className="nav-item">
                    <a href="#product-tab-specification" className="nav-link">مشخصات</a>
                </li>
                <li className="nav-item">
                    <a href="#product-tab-reviews" className="nav-link">نظرات مشتریان (3)</a>
                </li>
            </ul>
            <div className="tab-content">
                <div className="tab-pane active" id="product-tab-description">
                    <div className="row mb-4">
                        <div className="col-md-6 mb-5">
                            <h4 className="title tab-pane-title font-weight-bold mb-2">جزئیات</h4>
                            <p className="mb-4">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</p>
                            <ul className="list-type-check">
                                <li>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</li>
                                <li>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم</li>
                                <li>لورم ایپسوم متن ساختگی با تولید سادگی</li>
                            </ul>
                        </div>
                    </div>
                    <div className="row cols-md-3">
                        <div className="mb-3">
                            <h5 className="sub-title font-weight-bold"><span className="mr-3">1.</span>ارسال رایگان برگشت</h5>
                            <p className="detail pl-5">ما برای سفارشات بالای 50 دلار ارسال رایگان برای محصولات ارائه می دهیم و برای تمام سفارشات در ایالات متحده تحویل رایگان ارائه می دهیم.</p>
                        </div>
                        <div className="mb-3">
                            <h5 className="sub-title font-weight-bold"><span>2.</span>بازگشت رایگان و آسان</h5>
                            <p className="detail pl-5">ما محصولات خود را تضمین می کنیم و شما می توانید در 30 روز هر زمان که بخواهید تمام پول خود را پس بگیرید.</p>
                        </div>
                        <div className="mb-3">
                            <h5 className="sub-title font-weight-bold"><span>3.</span>تامین مالی ویژه</h5>
                            <p className="detail pl-5">با کارت اعتباری ویژه ما 20 تا 50 درصد تخفیف برای کالاهای بالای 50 دلار برای یک ماه یا بیش از 250 دلار برای یک سال دریافت کنید.</p>
                        </div>
                    </div>
                </div>
                <div className="tab-pane" id="product-tab-specification">
                    <ul className="list-none">
                        <li>
                            <label>مدل</label>
                            <p>Skysuite 320</p>
                        </li>
                        <li>
                            <label>رنگ</label>
                            <p>مشکی</p>
                        </li>
                        <li>
                            <label>اندازه</label>
                            <p>Large, Small</p>
                        </li>
                        <li>
                            <label>زمان گارانتی</label>
                            <p>3 Months</p>
                        </li>
                    </ul>
                </div>
                <div className="tab-pane" id="product-tab-reviews">
                    <div className="row mb-4">
                        <div className="col-xl-4 col-lg-5 mb-4">
                            <div className="ratings-wrapper">
                                <div className="avg-rating-container">
                                    <h4 className="avg-mark font-weight-bolder ls-50">3.3</h4>
                                    <div className="avg-rating">
                                        <p className="text-dark mb-1">میانگین امتیاز</p>
                                        <div className="ratings-container">
                                            <div className="ratings-full">
                                                <span className="ratings" style={{ width:'60%' }}></span>
                                                <span className="tooltiptext tooltip-top"></span>
                                            </div>
                                            <a href="#" className="rating-reviews">(3 بررسی ها)</a>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="ratings-value d-flex align-items-center text-dark ls-25 mb-4">
                                    <span
                                        className="text-dark font-weight-bold">200,000 تومان</span>توصیه شده<span
                                        className="count">(2 of 3)</span>
                                </div>
                                <div className="ratings-list">
                                    <div className="ratings-container">
                                        <div className="progress-bar progress-bar-sm ">
                                            <span></span>
                                        </div>
                                        <div className="progress-value">
                                            <mark>70%</mark>
                                        </div>
                                        <div className="ratings-full">
                                            <span className="ratings" style={{ width:'100%' }}></span>
                                            <span className="tooltiptext tooltip-top"></span>
                                        </div>
                                    </div>
                                    <div className="ratings-container">
                                        <div className="progress-bar progress-bar-sm ">
                                            <span></span>
                                        </div>
                                        <div className="progress-value">
                                            <mark>30%</mark>
                                        </div>
                                        <div className="ratings-full">
                                            <span className="ratings" style={{ width:'80%' }}></span>
                                            <span className="tooltiptext tooltip-top"></span>
                                        </div>
                                    </div>
                                    <div className="ratings-container">
                                        <div className="progress-bar progress-bar-sm ">
                                            <span></span>
                                        </div>
                                        <div className="progress-value">
                                            <mark>40%</mark>
                                        </div>
                                        <div className="ratings-full">
                                            <span className="ratings" style={{ width:'60%' }}></span>
                                            <span className="tooltiptext tooltip-top"></span>
                                        </div>
                                    </div>
                                    <div className="ratings-container">
                                        <div className="progress-bar progress-bar-sm ">
                                            <span></span>
                                        </div>
                                        <div className="progress-value">
                                            <mark>0%</mark>
                                        </div>
                                        <div className="ratings-full">
                                            <span className="ratings" style={{ width:'40%' }}></span>
                                            <span className="tooltiptext tooltip-top"></span>
                                        </div>
                                    </div>
                                    <div className="ratings-container">
                                        <div className="progress-bar progress-bar-sm ">
                                            <span></span>
                                        </div>
                                        <div className="progress-value">
                                            <mark>0%</mark>
                                        </div>
                                        <div className="ratings-full">
                                            <span className="ratings" style={{ width:'20%' }}></span>
                                            <span className="tooltiptext tooltip-top"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-8 col-lg-7 mb-4">
                            <div className="review-form-wrapper">
                                <h3 className="title tab-pane-title font-weight-bold mb-1">نظر خود را ارسال کنید</h3>
                                <p className="mb-3">آدرس ایمیل شما منتشر نخواهد شد. فیلدهای الزامی علامت گذاری شده اند *</p>
                                <form action="#" method="POST" className="review-form">
                                    <div className="rating-form">
                                        <label for="rating">امتیاز شما به این محصول:</label>
                                        <span className="rating-stars">
                                            <a className="star-1" href="#">1</a>
                                            <a className="star-2" href="#">2</a>
                                            <a className="star-3" href="#">3</a>
                                            <a className="star-4" href="#">4</a>
                                            <a className="star-5" href="#">5</a>
                                        </span>
                                    </div>
                                    <textarea cols="30" rows="6" placeholder="نظر خود را اینجا بنویسید..." className="form-control mb-3" id="review"></textarea>
                                    <div className="row gutter-md mb-3">
                                        <div className="col-md-6">
                                            <input type="text" className="form-control" placeholder="نام و نام خانوادگی" id="author"/>
                                        </div>
                                        <div className="col-md-6">
                                            <input type="text" className="form-control" placeholder="ایمیل" id="email_1"/>
                                        </div>
                                    </div>
                                    <div className="form-group mb-3">
                                        <input type="checkbox" className="custom-checkbox" id="save-checkbox"/>
                                        <label for="save-checkbox">برای دفعه بعد که نظر می دهم نام، ایمیل و وب سایت من را در این مرورگر.</label>
                                    </div>
                                    <button type="submit" className="btn btn-dark">ارسال</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
