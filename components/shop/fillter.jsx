import React, { useState } from 'react'
import Link from 'next/link'


export default function Fillter({openFilter}) {

    // fillter data
    const data = [
        {id:1 , name:'دسته بندی ها' , item:[
            'تجهیزات جانبی' ,
             'نوزادان','الکترونیک',
            'زیبایی','تزیین',
            'روش','غذا','پزشکی',
            'مبلمان','آشپزخانه',
        ]},
        {id:2 , name:'قیمت' , item:[
            '0 تا 100.000 تومان' ,
            '100.000 تا 200.000 تومان',
            '200.000 تا 400.000 تومان',
            '400.000 تا 600.000 تومان',
            '700+ تومان',
        ]},
        {id:3 , name:'سایز' , item:[
            'Extra Large' ,
            'Green Grass',
            'Node Js',
            'NS8',
            'Red',
            'Skysuite Tech',
            'Sterling',


        ]},
        {id:4 , name:'برند' , item:[
            'Elegant Auto Group' ,
            'علف سبز','الکترونیک',,
        ]},
        {id:5 , name:'رنگ' , item:[
            'مشکی' , 'آبی' , 
            'قهوه ای' , 'سبز' , 
            'خاکستری' , 'نارنجی' , 'زرد'
        ]},
    ]
    const [filter , setFilter] = useState(data)

  return (
    <>
        <aside className="sidebar shop-sidebar sticky-sidebar-wrapper sidebar-fixed">
            <div className="sidebar-overlay"></div>
            <Link className="sidebar-close" href="#"><i className="close-icon"></i></Link>

            <div className={`sidebar-content scrollable ${!openFilter ? 'close_filter' : 'open_filter'}`}>
                <div className="sticky-sidebar">
                    <div className="filter-actions">
                        <label>فیلتر ها</label>
                        <a href="#" className="btn btn-dark btn-link filter-clean">پاک کردن همه</a>
                    </div>
                    
                    {filter.map((i , index)=> {
                        return(
                            <div key={index} className="widget widget-collapsible">
                                <h3 className="widget-title"><label>{i.name}</label></h3>
                                <ul className="widget-body filter-items search-ul">
                                    {i.item.map((i , index)=> {
                                        return(
                                            <li key={index}><Link href="#">{i}</Link></li>
                                        )
                                    })}
                                </ul>
                            </div>
                        )
                    })}
                </div>
            </div>
        </aside>
    </>
  )
}
