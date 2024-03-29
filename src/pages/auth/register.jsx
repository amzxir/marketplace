import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Breadcrumb from '../../../components/breadcrumb/breadcrumb'

export default function Register() {
  return (
    <div className='rtl'>

      <Head>
        <title>فروشگاه - ثبت نام</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Breadcrumb
        childrenOne='خانه'
        childrenTwo='ثبت نام'
      />

      <div className="page-content">
          <div className="container">
              <div className="login-popup shadows mt-3">
                  <div className="tab tab-nav-boxed tab-nav-center tab-nav-underline">
                      <ul className="nav text-uppercase">
                          <li className="nav-item">
                              <p className="nav-link active">ثبت نام</p>
                          </li>
                      </ul>
                      <div className="tab-pane">
                          <div className="form-group">
                              <label>آدرس ایمیل شما *</label>
                              <input type="text" className="form-control" />
                          </div>
                          <div className="form-group mb-5">
                              <label>کلمه عبور *</label>
                              <input type="text" className="form-control"/>
                          </div>
                          <div className="checkbox-content login-vendor">
                              <div className="form-group mb-5">
                                  <label>نام کوچک *</label>
                                  <input type="text" className="form-control"/>
                              </div>
                              <div className="form-group mb-5">
                                  <label>نام خانوادگی *</label>
                                  <input type="text" className="form-control"/>
                              </div>
                              <div className="form-group mb-5">
                                  <label>شماره تلفن *</label>
                                  <input type="text" className="form-control" name="phone-number" id="phone-number" required />
                              </div>
                          </div>
                          <Link href="/auth/login" className="d-block mb-5 text-primary">اگه ثبت نام کردی وارد شو</Link>
                          <div className="form-checkbox d-flex align-items-center justify-content-between mb-5">
                              <input type="checkbox" className="custom-checkbox" id="remember" name="remember" required=""/>
                              <label for="remember" className="font-size-md">من موافقم <a  href="#" className="text-primary font-size-md">حریم خصوصی هستم</a></label>
                          </div>
                          <button className="btn btn-primary w-100">ثبت نام</button>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </div>
  )
}
