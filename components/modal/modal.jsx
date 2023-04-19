import React from 'react'
import { useAppContext } from '@/context/state'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faX} from '@fortawesome/free-solid-svg-icons'

export default function Modal({children}) {

    const {openModal , setOpenModal} = useAppContext()

  return (
    <>
        {openModal === true ? 
            <div className='back-modal translate-y-0' onClick={()=> setOpenModal(false)}></div>
            :
            ''
        }
        <div className={`top-0 right-0 left-0 bottom-0 fixed bg-white w-[75%] m-auto h-[75%] z-40 p-10 ${openModal ? 'translate-y-0 opacity-1' :'translate-y-full opacity-0'} ease-in-out duration-300`}>
            <FontAwesomeIcon onClick={()=> setOpenModal(false)} className='icon-closse' icon={faX}/>
            {children}
        </div>
    </>
  )
}
