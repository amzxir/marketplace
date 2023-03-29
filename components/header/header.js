import { useState } from 'react';
import Link from 'next/link'

export default function Header() {

    // shop categories data
    const shopCategory = [
        {id:1 , name:'صفحات فروشگاه' , category:['لورم1' , 'لورم2' , 'لورم3' , 'لورم4' , 'لورم5' , 'لورم6' , 'لورم7']},
        {id:2 , name:'طرح بندی فروشگاه' , category:['لورم1' , 'لورم2' , 'لورم3' , 'لورم4' , 'لورم5' , 'لورم6' , 'لورم7']},
        {id:3 , name:'صفحات فروشگاه' , category:['لورم1' , 'لورم2' , 'لورم3' , 'لورم4' , 'لورم5' , 'لورم6' , 'لورم7']},
        {id:4 , name:'طرح بندی فروشگاه' , category:['لورم1' , 'لورم2' , 'لورم3' , 'لورم4' , 'لورم5' , 'لورم6' , 'لورم7']},
    ]
    const [category, setCategory] = useState(shopCategory);

    // vendor category data
    const vendorCategory = [
        {id:1 , name:'1فهرست فروشگاه' , category:['فهرست فروشگاه 1' , 'فهرست فروشگاه 2' , 'فهرست فروشگاه 3' , 'فهرست فروشگاه 4']},
        {id:2 , name:'2فهرست فروشگاه' , category:['فهرست فروشگاه 1' , 'فهرست فروشگاه 2' , 'فهرست فروشگاه 3' , 'فهرست فروشگاه 4']},
        {id:3 , name:'3فهرست فروشگاه' , category:['فهرست فروشگاه 1' , 'فهرست فروشگاه 2' , 'فهرست فروشگاه 3']},
    ]
    const [vendors, setVendors] = useState(vendorCategory);

    // navbar categories
    const caregories = [
        {id:1 , name:'کامپیوترها' , icon:'w-icon-electronics'},
        {id:1 , name:'لباس' , icon:'w-icon-tshirt'},
        {id:1 , name:'مبلمان' , icon:'w-icon-sofa'},
        {id:1 , name:'برق' , icon:'w-icon-bridge-lamp'},
        {id:1 , name:'هدفون' , icon:'w-icon-headphone'},
        {id:1 , name:'دفتر' , icon:'w-icon-bag'},
        {id:1 , name:'الکترونیک' , icon:'w-icon-camera'},
        {id:1 , name:'موبایل' , icon:'w-icon-android'},
        {id:1 , name:'اجاق گاز' , icon:'w-icon-rice-cooker'},
        {id:1 , name:'تجهیزات جانبی' , icon:'w-icon-return'},
        {id:1 , name:'فریزر' , icon:'w-icon-furniture'},
    ]


  return (
    <>
      <header className="header">

          <div className="header-top">
              <div className="container">
                  <div className="header-left">
                      <p className="welcome-msg">به فروشگاه لورم خوش آمدید</p>
                  </div>
                  <div className="header-right">
                      <div className="dropdown">
                          <a href="#language"><img src="assets/images/flags/eng.png" alt="ENG Flag" width="14"
                                  height="8" className="dropdown-image" /> ENG</a>
                          <div className="dropdown-box">
                              <a href="#ENG">
                                  <img src="assets/images/flags/eng.png" alt="ENG Flag" width="14" height="8"
                                      className="dropdown-image" />
                                  ENG
                              </a>
                              <a href="#FRA">
                                  <img src="assets/images/flags/fra.png" alt="FRA Flag" width="14" height="8"
                                      className="dropdown-image" />
                                  FRA
                              </a>
                          </div>
                      </div>
                      <span className="divider d-lg-show"></span>
                      <Link href="/" className="d-lg-show">ناحیه کاربری</Link>
                      <Link href="/auth/login" className="d-lg-show login sign-in"><i className="w-icon-account"></i>ورود</Link>
                      <span className="delimiter d-lg-show">/</span>
                      <Link href="/auth/register" className="ml-0 d-lg-show login register">ثبت نام</Link>
                  </div>
              </div>
          </div>

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
                      <Link className="wishlist label-down link d-xs-show" href="/">
                          <i className="w-icon-heart"></i>
                          <span className="wishlist-label d-lg-show">علاقه مندی ها</span>
                      </Link>
                      <Link className="compare label-down link d-xs-show" href="/">
                          <i className="w-icon-compare"></i>
                          <span className="compare-label d-lg-show">مقایسه</span>
                      </Link>
                      <div className="dropdown cart-dropdown cart-offcanvas ml-0 ml-lg-2">
                          <div className="cart-overlay"></div>
                          <Link href="#" className="cart-toggle label-down link">
                              <i className="w-icon-cart">
                                  <span className="cart-count">2</span>
                              </i>
                              <span className="cart-label">سبد خرید</span>
                          </Link>
                      </div>
                  </div>
                  <div className="header-left ml-4 rtl">
                      <Link href="#" className="mobile-menu-toggle  w-icon-hamburger ml-4" aria-label="menu-toggle">
                      </Link>
                      <Link href="/" className="logo ml-lg-0">
                          <img src="assets/images/demos/demo9/header-logo.png" alt="logo" width="144" height="45" />
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

          <div className="header-bottom sticky-content fix-top sticky-header rtl">
              <div className="container">
                  <div className="inner-wrap">
                      <div className="header-right">
                          <nav className="main-nav ml-0">
                              <ul className="menu">
                                  <li className="active">
                                      <Link href="/">خانه</Link>
                                  </li>
                                  <li>
                                      <Link href="#">فروشگاه ها</Link>

                                      <ul className="megamenu">

                                        {category.map((i , index)=> {
                                            return(
                                                <li key={index}>
                                                    <h4 className="menu-title">{i.name}</h4>
                                                    <ul>
                                                        {i.category.map((i , index)=> {
                                                            return(
                                                                <li key={index}><Link href="#">{i}</Link></li>
                                                            )
                                                        })}
                                                    </ul>
                                                </li>
                                            )
                                        })}

                                      </ul>
                                  </li>
                                  <li>
                                      <Link href="#">فروشنده</Link>
                                      <ul>
                                        {vendors.map((i , index) => {
                                            return(
                                                <li key={index}>
                                                    <Link href="#">{i.name}</Link>
                                                    <ul>
                                                        {i.category.map((i , index)=> {
                                                            return(
                                                                <li key={index}><Link href="#">{i}</Link></li>
                                                            )
                                                        })}
                                                    </ul>
                                                </li>
                                            )
                                        })}
                                      </ul>
                                  </li>
                                  <li>
                                      <Link href="#">درباره ما</Link>
                                  </li>
                                  <li>
                                      <Link href="#">تماس با ما</Link>
                                  </li>
                              </ul>
                          </nav>
                      </div>
                      <div className="header-left">
                          <Link href="#" className="d-xl-show ml-3"><i className="w-icon-map-marker mr-1"></i> سفارشات </Link>
                          <Link href="#"><i className="w-icon-sale"></i> معاملات روزانه </Link>
                      </div>
                  </div>
              </div>
          </div>

          <div className="container d-lg-show rtl">
              <div className="inner-wrap">
                  <ul className="menu horizontal-menu category-menu">

                    {caregories.map((i , index)=> {
                        return(
                            <li key={index}>
                                <Link href="#">
                                    <i className={i.icon}></i>{i.name}
                                </Link>
                            </li>
                        )
                    })}

                      <li>
                          <Link href="#">
                              <i className="w-icon-dots-circle"></i>همه دسته بندی ها
                          </Link>
                      </li>
                  </ul>
              </div>
          </div>
      </header>
    </>
  )
}

