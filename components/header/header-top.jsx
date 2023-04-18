import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function HeaderTop() {
  return (
    <>
        <div className="header-top">
            <div className="container">
                <div className="header-left">
                    <p className="welcome-msg">به فروشگاه لورم خوش آمدید</p>
                </div>
                <div className="header-right">
                    <div className="dropdown">
                        <Link href="#"><Image src="/assets/images/flags/eng.png" alt="ENG Flag" width="14" height="8" className="dropdown-image" /> ENG</Link>
                        <div className="dropdown-box">
                            <Link href="#">
                                <Image src="/assets/images/flags/eng.png" alt="ENG Flag" width="14" height="8" className="dropdown-image" />
                                ENG
                            </Link>
                            <Link href="#FRA">
                                <Image src="/assets/images/flags/fra.png" alt="FRA Flag" width="14" height="8" className="dropdown-image" />
                                FRA
                            </Link>
                        </div>
                    </div>
                    <span className="divider d-lg-show"></span>
                    <Link href="/" className="d-lg-show">ناحیه کاربری</Link>
                    <Link href="/auth/login" className="d-lg-show login sign-in">ورود</Link>
                    <span className="delimiter d-lg-show">/</span>
                    <Link href="/auth/register" className="ml-0 d-lg-show login register">ثبت نام <i className="w-icon-account"></i></Link>
                </div>
            </div>
        </div>
    </>
  )
}
