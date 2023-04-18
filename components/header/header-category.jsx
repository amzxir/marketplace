import Link from 'next/link'
import React from 'react'


export default function HeaderCategory({caregories}) {
  return (
    <>
        <div className="container d-lg-show rtl">
            <div className="inner-wrap">
                <ul className="menu horizontal-menu category-menu">
                    {caregories.map((i , index)=> {
                        return(
                            <li key={index}>
                                <Link href="/shop">
                                    <i className={i.icon}></i>{i.name}
                                </Link>
                            </li>
                        )
                    })}
                    <li>
                        <Link href="/shop">
                            <i className="w-icon-dots-circle"></i>همه دسته بندی ها
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </>
  )
}