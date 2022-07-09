import React from 'react'
import logo from '../assets/image/mockup.png'
import imagelaptor from '../assets/image/laptor.png'
import that from '../assets/image/that1.png'
import image from '../assets/image/Image.png'
import mack from '../assets/image/mack.png'
import iphone from '../assets/image/Screen.png'
import windows from '../assets/image/windows.jpg'
import AOS from 'aos';
import "../assets/css/style.css"
import 'aos/dist/aos.css'; 

// You can also use <link> for styles
import {Slider} from './Slider'
AOS.init({
  duration:1900
});
export const Main = () => {
  return (
    <main>
    <div className='grid grid-cols-1 w-4/5 m-auto max-w-7xl mx-auto'>
   <div >
   <h2 className=' text-black text-2xl smtext-3xl md:text-5xl font-bold mb-2 
   text-center mt-24 max-w-3xl mx-auto '>
    Guarda y comparte fácilmente
lo que realmente te importa crea 
<ul className='typing '>
  <li><span>Historias</span></li>
  <li><span>Albums</span></li>
  <li><span>Recuerdos</span></li>
  <li><span>Colecciones</span></li>
  </ul> 
  </h2>
      <p className='text-black text-tart
      text-center'>Crea tu album y comparte con amigos y familiares</p>
   </div>
   <div>
    <img  id='scrolImage' src={logo} alt='logo' />
   </div>
    </div>

    <div  className='max-w-7xl mx-auto w-11/12 2xl:w-full'
   data-aos="fade-up"
   data-aos-anchor-placement="top-center">
      <div className='gd'>
        <div>
          <article 
          className='sm:max-w-sm md:w-[30rem] lg:max-w-4xl 
          '>
          <h2 className=' text-2xl text-center md:text-start md:text-2xl  lg:text-5xl font-bold mb-2 
      text-blue-600'>
            cuenta con una gran cantidad de funcionalidades
          </h2>
          <p className='text-center md:text-start mx-4 md:mx-0 max-w-sm'>
            lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit amet
          </p>
          <a href='/login' className='border rounded border-blue-600
          text-blue-500 text-3 text-center md:text-xl p-1 md:p-3 mt-3 w-48  m-auto md:inline-block
          hover:bg-blue-500 flex justify-center hover:text-white duration-300'> Crear cuenta</a>
          </article>


        </div>
        <figure className='md:w-full md:h-full h-full lg:w-[29rem] xl:w-[40rem] place-center flex justify-start items-center'>
          <img src={image} alt='laptor' className='drop-shadow-2xl
          rounded-[1rem]' />
          </figure>
        
      </div>

    </div>
    <div  className='max-w-7xl mx-auto w-11/12 2xl:w-full mb-12'
   data-aos="fade-up"
   data-aos-anchor-placement="top-center">
      <div className='gd'>
        <div>
          <article className='sm:max-w-sm md:w-[30rem] lg:max-w-4xl mt-12 '>
          <h2 className='text-2xl text-center md:text-start md:text-2xl  lg:text-5xl font-bold mb-2 
      text-blue-600'>
            cuenta con una gran cantidad de funcionalidades
          </h2>
          <p  className='text-center md:text-start mx-4 md:mx-0 max-w-sm'>
            lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit amet
          </p>
          <a href='/login' className='
          border rounded border-blue-600
          text-blue-500 text-3 text-center md:text-xl p-1 md:p-3  mt-3 w-48  m-auto md:inline-block
          hover:bg-blue-500 flex justify-center hover:text-white duration-300  mb-12'> Crear cuenta</a>
          </article>


        </div>
        <div>
          <figure className='md:w-full md:h-full h-full lg:w-[29rem] xl:w-[40rem] place-center flex justify-start items-center'>
          <img src={that} alt='laptor' className='drop-shadow-2xl
          rounded-[1rem] ' />
          </figure>
        </div>
        
      </div>

    </div>
    <div  className='max-w-7xl mx-auto w-11/12 2xl:w-full mb-12'
   data-aos="fade-up"
   data-aos-anchor-placement="top-center">
      <div className='gd'>
        <div>
          <article className='mt-12 sm:max-w-sm md:w-[30rem] lg:max-w-4xl '>
          <h2 className='text-2xl text-center md:text-start md:text-2xl  lg:text-5xl font-bold mb-2 
      text-blue-600'>
            cuenta con una gran cantidad de funcionalidades
          </h2>
          <p  className='text-center md:text-start mx-4 md:mx-0 max-w-sm'>
            lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit amet
          </p>
          <a href='/login' className='
          border rounded border-blue-600
          text-blue-500 text-3 text-center md:text-xl p-1 md:p-3 mt-3 w-48  m-auto md:inline-block
          hover:bg-blue-500 flex justify-center hover:text-white duration-300 mb-12'> Crear cuenta</a>
          </article>


        </div>
        <div>
          <figure className='md:w-full md:h-full h-full lg:w-[29rem] xl:w-[40rem] place-center flex justify-start items-center'>
          <img src={image} alt='laptor' className='drop-shadow-2xl
          rounded-[1rem]' />
          </figure>
        </div>
        
      </div>

    </div>
    
    <div>
      <h3 className='text-center block text-blue-600 text-3xl mt-20 sm:text-4xl font-bold'>Personaliza Tu sitio a tu gusto</h3>
    </div>
    <div className='max-w-7xl  w-11/12  mx-auto mt-[3rem]   relative'>
      
        <figure className='relative' data-aos=" fade-right ">
          <img src={mack} alt='laptor' className=' drop-shadow-2xl
          rounded-[1rem] '  />
        </figure>
      
          <img src={iphone} alt='laptor' className=' absolute top-6 sm:top-12 md:top-16  right-0 h-full  '/>
       
    
    </div>

  
    <div className='
    max-w-7xl mx-auto mt-12 mb-14 flex flex-col md:flex-row sm:justify-between items-center '
    data-aos="fade-up"
   data-aos-anchor-placement="top-center">
      <div className=''>
        <section className='md:w-96 m-2 shadow-2xl bg-white
        rounded-[1rem] p-1 border border-blue-500 border-b-4 mb-6'>
          <article >
            <h3 className='font-bold m-1'>Description general</h3>
            <p className='m-1 text-gray-700'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry”s standard </p>
          </article>
        </section>
        <section className='md:w-96 m-2 shadow-2xl
         rounded-[1rem] p-1 border border-blue-500 border-b-4 mb-6'>
          <article >
            <h3 className='font-bold m-1'>Description general</h3>
            <p className='m-1 text-gray-700'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry”s standard </p>
          </article>
        </section>
        <section className='md:w-96 m-2 shadow-2xl
      rounded-[1rem] p-1 border border-blue-500 border-b-4 mb-6'>
          <article >
            <h3 className='font-bold m-1'>Description general</h3>
            <p className='m-1 text-gray-700'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry”s standard </p>
          </article>
        </section>
      </div>
      <div>
    < Slider/>

      </div>
    </div>
    </main>
  )
}
