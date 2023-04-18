import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function HeaderMiddle({handelMenu , setIsOpen , isOpen}) {
  return (
    <>
        <div className="header-middle">
            <div className="container">
                <div className="header-right mr-md-4 rtl">
                    <div className="header-call d-xs-show d-lg-flex align-items-center">
                        <a href="tel:#" className="w-icon-call"></a>
                        <div className="call-info d-lg-show">
                            <h4 className="chat font-weight-normal font-size-md text-normal ls-normal text-light mb-0">
                                <span className="text-capitalize text-dark">تماس با ما</span></h4>
                            <a href="tel:#" className="phone-number font-weight-bolder ls-50">0919995465</a>
                        </div>
                    </div>
                    <Link className="wishlist label-down link d-xs-show" href="/wishlist">
                        <i className="w-icon-heart"></i>
                        <span className="wishlist-label d-lg-show">علاقه مندی ها</span>
                    </Link>
                    <Link className="compare label-down link d-xs-show" href="/compare">
                        <i className="w-icon-compare"></i>
                        <span className="compare-label d-lg-show">مقایسه</span>
                    </Link>
                    <div className="dropdown cart-dropdown cart-offcanvas ml-0 ml-lg-2">
                        <div className="cart-overlay"></div>
                        <a onClick={()=> setIsOpen(!isOpen)} className="cart-toggle label-down link pointer">
                            <i className="w-icon-cart">
                                <span className="cart-count">2</span>
                            </i>
                            <span className="cart-label">سبد خرید</span>
                        </a>
                    </div>
                </div>

                <div className="header-left ml-4 rtl">
                    <Link href='#' onClick={handelMenu} className="mobile-menu-toggle w-icon-hamburger ml-4">
                    </Link>
                    <Link href="/" className="logo ml-lg-0">
                        <Image src="/assets/images/demos/demo9/header-logo.png" alt="logo" width="144" height="45" />
                    </Link>
                    <form className="input-wrapper header-search hs-expanded hs-round d-none d-md-flex rtl">
                        <div className="select-box">
                            <select id="category" name="category">
                                <option value="">همه دسته بندی ها</option>
                                <option value="4">Fashion</option>
                                <option value="5">Furniture</option>
                                <option value="6">Shoes</option>
                                <option value="7">Sports</option>
                                <option value="8">Games</option>
                                <option value="9">Computers</option>
                                <option value="10">Electronics</option>
                                <option value="11">Kitchen</option>
                                <option value="12">Clothing</option>
                            </select>
                        </div>
                        <input type="text" className="form-control" placeholder="جستجو کنید ..." required />
                        <button className="btn btn-search" type="submit"><i className="w-icon-search"></i>
                        </button>
                    </form>


                </div>

            </div>
        </div>
    </>
  )
}
