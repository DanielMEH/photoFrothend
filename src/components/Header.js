  import React,{useState, useEffect} from 'react'
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faBars } from '@fortawesome/free-solid-svg-icons'
  import logo from '../assets/image/mockup.png'
  import "../assets/css/style.css"
  import { Menu } from './container/Menu'
  
  
  export const Header = () => { 
    const [open, setOpen] = useState(false)
    const handleOpen = () => {

      setOpen(!open)


    }
    useEffect(() => {

      handleOpen()

    },[])

  return (
    <>

    <div className='responsive-menu'>
    <div className='menubar'>
    <div className='font-bold  text-blue-500 text-2xl md:text-[2.30rem] ' >
        <h1 className='title'>Photoviews</h1>
        </div>
        <div><h2 className='text-3xl'>{!open ? "Menú":""}</h2></div>
      <div className='menu-content m-2' id='menuactive'
      onClick={handleOpen}>
        <span className={!open ? "menu_1 menuActive": "menu_1"}></span>
        <span className={!open ? "menu_2 menuActive": "menu_2"}></span>
        <span className={!open ? "menu_3 menuActive": "menu_3"}></span>
      </div>
      
    </div>
    </div>
    <Menu estado={open}/>
      
     <div className=' hidden lg:block '>
     <div className='flex justify-between 
     p-2 items-center 0  max-w-7xl mx-auto 
     lg:w-11/12  '>
      
      <div className='font-bold z-1 text-blue-500 text-2xl md:text-[2.30rem] ' >
        <h1>Photoviews</h1>
        </div>
    <div>
      <div className=''>
      <ul className='flex '>
        <li className='text-[1.2rem] mx-4  '><a href='/ruta'>Quienes somos</a></li>
        <li className='text-[1.2rem] mx-4'><a href='/ruta'>Nuestra empresa</a></li>
        <li className='text-[1.2rem] mx-4'><a href='/ruta'>Ayuda</a></li>
      </ul>
      </div>
    </div>
    <div className='flex items-center text-[1.2rem]  text-black'><span className='mx-1
    '><a href='/registrarse'>Registrarse</a></span> <span className='mx-1 
    text- p-1 rounded rounded-2 border border-blue-500 hover:text-white
    duration-300
    hover:bg-blue-500 text-[1.2rem]'><a href='/registrarse'>Iniciar sesión</a></span>
    </div>
    </div>
     </div>
    
    </>
  )
}
