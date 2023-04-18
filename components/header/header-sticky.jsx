import Link from 'next/link'
import React , {useEffect , useState} from 'react'


export default function HeaderSticky({category}) {

    // state position header
    const [position , setPosition] = useState()

    // handel scroll for change position
    const handelScroll = () => {
        
        if (window.scrollY>260){
            setPosition('fixed')
        } else {
            setPosition('sticky')
        }
    }

    useEffect(()=> {
        window.addEventListener('scroll', handelScroll)
    },[])

  return (
    <>
        <div className="header-bottom sticky-content fix-top sticky-header rtl"
             style={{ position:position , right:'0' , left:'0' , top:'0' }}
        >
            <div className="container">
                <div className="inner-wrap">
                    <div className="header-right">
                        <nav className="main-nav ml-0">
                            <ul className="menu">
                                <li>
                                    <Link href="/">خانه</Link>
                                </li>
                                <li>
                                    <Link href="/shop">فروشگاه ها</Link>
                                    <ul className="megamenu">
                                        {category.map((i , index)=> {
                                            return(
                                                <li key={index}>
                                                    <h4 className="menu-title">{i.name}</h4>
                                                    <ul>
                                                        {i.category.map((i , index)=> {
                                                            return(
                                                                <li key={index}><Link href="/shop">{i}</Link></li>
                                                            )
                                                        })}
                                                    </ul>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </li>
                                <li>
                                    <Link href="/content/about-us">درباره ما</Link>
                                </li>
                                <li>
                                    <Link href="/content/contact-us">تماس با ما</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="header-left">
                        <Link href="#" className="d-xl-show ml-3"><i className="w-icon-map-marker mr-1"></i> سفارشات </Link>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
