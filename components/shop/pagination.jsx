import Link from 'next/link'
import React from 'react'

export default function Pagination() {
  return (
    <>
        <div className="toolbox toolbox-pagination justify-content-between">
            <p className="showing-info mb-2 mb-sm-0">
                در حال نمایش<span>1-12 از 60</span>محصولات
            </p>
            <ul className="pagination">
                <li className="page-item active">
                    <Link className="page-link" href="#">1</Link>
                </li>
                <li className="page-item">
                    <Link className="page-link" href="#">2</Link>
                </li>
            </ul>
        </div>
    </>
  )
}