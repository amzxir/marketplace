import React from 'react'
import Link from 'next/link'


export default function Menu(props) {
  return (
    <>
      <div className={props.openMenu === false ? '' :'menu-overlay'}></div>
      <div className={props.openMenu === true ? 'menu-mobile-block rtl' : 'menu-mobile-none'}>
        <button onClick={props.handelMenu} className='btn btn-exit border-0 p-0'><i className="close-icon"></i></button>
        <ul>
            <li><Link href='/'>خانه</Link></li>
            <li><Link href='#'>فروشگاه</Link></li>
            <li><Link href='#'>فروشنده ها</Link></li>
            <li><Link href='/about-us'>درباره ما</Link></li>
            <li><Link href='/contact-us'>تماس با ما</Link></li>
        </ul>
      </div>
    </>
  )
}

