import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <>
      <footer className="footer footer-dark appear-animate mt-10 rtl">
          <div className="footer-newsletter bg-primary">
              <div className="container">
                  <div className="row justify-content-center align-items-center">
                      <div className="col-xl-5 col-lg-6">
                          <div className="icon-box icon-box-side text-white">
                              <div className="icon-box-icon d-inline-flex">
                                  <i className="w-icon-envelop3"></i>
                              </div>
                              <div className="icon-box-content">
                                  <h4 className="icon-box-title text-white text-uppercase font-weight-bold">مشترک شدن در خبرنامه ما</h4>
                                  <p className="text-white">تمام آخرین اطلاعات در مورد رویدادها، فروش ها و پیشنهادات را دریافت کنید.</p>
                              </div>
                          </div>
                      </div>
                      <div className="col-xl-7 col-lg-6 col-md-9 mt-4 mt-lg-0 ">
                          <form action="#" method="get"
                              className="input-wrapper input-wrapper-inline input-wrapper-rounded">
                              <input type="email" className="form-control mr-2 bg-white" name="email" id="email"
                                  placeholder="ایمیل خود را وارد کنید ..." />
                              <button className="btn btn-dark btn-rounded" type="submit">ثبت<i className="w-icon-long-arrow-right"></i></button>
                          </form>
                      </div>
                  </div>
              </div>
          </div>
          <div className="container">
              <div className="footer-top">
                  <div className="row">
                      <div className="col-lg-4 col-sm-6">
                          <div className="widget widget-about">
                              <Link href="/" className="logo-footer">
                                  <img src="assets/images/demos/demo9/footer-logo.png" alt="logo-footer" width="144"height="45" />
                              </Link>
                              <div className="widget-body">
                                  <p className="widget-about-title">سوال دارید؟ 24/7 با ما تماس بگیرید</p>
                                  <a href="tel:18005707777" className="widget-about-call">0217773637</a>
                                  <p className="widget-about-desc">اکنون ثبت نام کنید تا به‌روزرسانی‌های مربوط به نمادهای pronot get up را دریافت کنید
                                      & کوپن استر در حال حاضر تون.
                                  </p>

                                  <div className="social-icons social-icons-colored">
                                      <Link href="#" className="social-icon social-facebook w-icon-facebook"></Link>
                                      <Link href="#" className="social-icon social-twitter w-icon-twitter"></Link>
                                      <Link href="#" className="social-icon social-instagram w-icon-instagram"></Link>
                                      <Link href="#" className="social-icon social-youtube w-icon-youtube"></Link>
                                      <Link href="#" className="social-icon social-pinterest w-icon-pinterest"></Link>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-3 col-sm-6">
                          <div className="widget">
                              <h3 className="widget-title">شرکت</h3>
                              <ul className="widget-body">
                                  <li><Link href="about-us.html">درباره ما</Link></li>
                                  <li><Link href="#">تیم ما</Link></li>
                                  <li><Link href="#">حرفه</Link></li>
                                  <li><Link href="#">تماس با ما</Link></li>
                                  <li><Link href="#">تاریخچه سفارش ها</Link></li>
                              </ul>
                          </div>
                      </div>
                      <div className="col-lg-3 col-sm-6">
                          <div className="widget">
                              <h4 className="widget-title">حساب من</h4>
                              <ul className="widget-body">
                              <li><Link href="about-us.html">درباره ما</Link></li>
                                  <li><Link href="#">تیم ما</Link></li>
                                  <li><Link href="#">حرفه</Link></li>
                                  <li><Link href="#">تماس با ما</Link></li>
                                  <li><Link href="#">تاریخچه سفارش ها</Link></li>
                              </ul>
                          </div>
                      </div>
                      <div className="col-lg-3 col-sm-6">
                          <div className="widget">
                              <h4 className="widget-title">خدمات مشتری</h4>
                              <ul className="widget-body">
                              <li><Link href="about-us.html">درباره ما</Link></li>
                                  <li><Link href="#">تیم ما</Link></li>
                                  <li><Link href="#">حرفه</Link></li>
                                  <li><Link href="#">تماس با ما</Link></li>
                                  <li><Link href="#">تاریخچه سفارش ها</Link></li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="footer-bottom">
                  <div className="footer-left">
                      <p className="copyright">حق چاپ © 2021 فروشگاه نیباک. تمامی حقوق محفوظ است.</p>
                  </div>
              </div>
          </div>
      </footer>
    </>
  )
}

