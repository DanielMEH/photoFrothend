import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faAngleRight, faUserPlus, faQuestionCircle,
faHandHoldingHand, faAddressCard, faSquarePollHorizontal } from '@fortawesome/free-solid-svg-icons'

import "../../assets/css/style.css"
export const Menu = ({estado}) => {
  return (
    <>
  <div className={estado ? " duration-300 datamenu": "acmenu duration-300"}>
      
  <div className='z-20 bg-white h-full w-full fixed top-0 overflow-y-hidden'>
   <nav className= 'mt-20 sm:mt-28 '>
    <div className='m-3'>
      <ul className=''>
      <li className=''><a href='/ruta'
      className='flex justify-between  text-gray-700 text-xl m-2 rounded-sm p-2 '>
        <span><FontAwesomeIcon icon={faUser}/> Iniciar sesión </span>
        <span><FontAwesomeIcon icon={faAngleRight }/></span>
      </a></li>
      <li className=''><a href='/ruta'
      className='
      flex justify-between  text-gray-700 text-xl rounded-sm p-2  m-2   '>
        <span><FontAwesomeIcon icon={faUserPlus}/> Crear cuenta </span>
        <span><FontAwesomeIcon icon={faAngleRight }/></span>
      </a></li>
      
      </ul>
    </div>
   <div>
   <ul className='m-3'>
      <div className=' text-center text-2xl'>Ajustes</div>
      <li className=''><a href='/ruta'
      className='flex justify-between  text-gray-700 text-xl m-2 rounded-sm p-2 '>
        <span><FontAwesomeIcon icon={faAddressCard}/> Quienes somos</span>
        <span><FontAwesomeIcon icon={faAngleRight }/></span>
      </a></li>
      <li className=''><a href='/ruta'
      className='flex justify-between  text-gray-700 text-xl m-2 rounded-sm p-2 '>
        <span><FontAwesomeIcon icon={faHandHoldingHand}/> Trabaja con nosotros </span>
        <span><FontAwesomeIcon icon={faAngleRight }/></span>
      </a></li>
      <li className=''><a href='/ruta'
      className='flex justify-between  text-gray-700 text-xl m-2 rounded-sm p-2 '>
        <span><FontAwesomeIcon icon={faQuestionCircle}/> Ayuda  </span>
        <span><FontAwesomeIcon icon={faAngleRight }/></span>
      </a></li>
      <li className=''><a href='/ruta'
      className='flex justify-between  text-gray-700 text-xl m-2 rounded-sm p-2 '>
        <span><FontAwesomeIcon icon={faSquarePollHorizontal}/> Términos y condiciones </span>
        <span><FontAwesomeIcon icon={faAngleRight }/></span>
      </a></li>
    </ul>
   </div>
   </nav>
    </div>
  </div>
    </>
  )
}
