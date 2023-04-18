import Link from 'next/link'
import React from 'react'


export default function Breadcrumb({childrenOne , childrenTwo}) {
  return (
    <>
        <nav className="breadcrumb-nav rtl mb-5">
            <div className="container">
                <ul className="breadcrumb">
                    <li><Link href="/">{childrenOne}</Link></li>
                    <li>{childrenTwo}</li>
                </ul>
            </div>
        </nav>
    </>
  )
}
