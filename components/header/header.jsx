import { useState } from 'react';
import Menu from 'components/mobile-menu/menu'
import Sidebar from 'components/card/sidebar';
import HeaderTop from './header-top'
import HeaderMiddle from './header-middle'
import HeaderCategory from './header-category'
import HeaderSticky from './header-sticky'




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

    // open and close menu
    const [openMenu , setOpenMenu] = useState(false)

    const handelMenu = () => {
        setOpenMenu(!openMenu)
    }

    // state sidebar card
    const [isOpen , setIsOpen] = useState(false)

  return (
    <>
      <header className="header">
        <HeaderTop/>

        <HeaderMiddle 
            handelMenu={handelMenu}
            setIsOpen={setIsOpen}
            isOpen={isOpen}
        />

        <HeaderSticky
            category={category}
        />

        <HeaderCategory
            caregories={caregories}
        />

        <Sidebar
            isOpen={isOpen}
            setIsOpen={setIsOpen}
        />      

        <Menu 
            openMenu={openMenu}
            setOpenMenu={setOpenMenu}
            handelMenu={handelMenu}
        />
      </header>

    </>
  )
}

