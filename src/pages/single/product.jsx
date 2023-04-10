import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import Single from 'components/single/single'

export default function Product() {
  return (
    <>
        <nav className="breadcrumb-nav rtl">
            <div className="container">
                <ul className="breadcrumb">
                    <li><Link href="/">خانه</Link></li>
                    <FontAwesomeIcon icon={faAngleLeft} />
                    <li className='mr-1'>مشاهده محصول</li>
                </ul>
            </div>
        </nav>
        <Single/>
    </>
  )
}
