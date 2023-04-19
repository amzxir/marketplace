import Link from 'next/link'
import React from 'react'

export default function Toolbox({openFilter , setOpenFilter , changeProduct , setChangeProduct}) {

  return (
    <>
        <nav className="toolbox sticky-toolbox sticky-content fix-top">
            <div className="toolbox-left">
                <a onClick={()=> setOpenFilter(!openFilter)} className="btn btn-primary btn-outline btn-rounded left-sidebar-toggle btn-icon-left d-block d-lg-none"><i className="w-icon-category"></i><span>فیلترها</span></a>
            </div>
            <div className="toolbox-right">
                <div className="toolbox-item toolbox-show select-box">
                    <select name="count" className="form-control">
                        <option value="9">نمایش 9</option>
                        <option value="12" >نمایش 12</option>
                        <option value="24">نمایش 24</option>
                        <option value="36">نمایش 36</option>
                    </select>
                </div>
                <div className="toolbox-item toolbox-layout">
                    <a onClick={()=> setChangeProduct(true)} className={`icon-mode-list btn-layout ${changeProduct === true ? 'active' : ''}`}>
                        <i className="w-icon-list"></i>
                    </a>
                    <a onClick={()=> setChangeProduct(false)} className={`icon-mode-grid btn-layout ${changeProduct === false ? 'active' : ''}`}>
                        <i className="w-icon-grid"></i>
                    </a>
                </div>
            </div>
        </nav>
    </>
  )
}
