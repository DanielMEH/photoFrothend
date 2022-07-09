import {useState, useEffect} from 'react'
import SliderImage from './SliderImage'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import "../assets/css/style.css"

export const Slider = () => {

  const [imagenActual, setimagenActual] = useState(0)
  const cantidad = SliderImage?.length

  useEffect(() => {

    const intervalo = setInterval(() => {
      setimagenActual(imagenActual + 1)
      if (imagenActual === cantidad - 1) {
        setimagenActual(0)
      }
    }, 6000)
    return () => {
      clearInterval(intervalo)
    }

  })
  if(!Array.isArray(SliderImage) || cantidad === 0 )
  return;

  const suguientImagen = () => {
    
    setimagenActual(imagenActual ===  cantidad - 1 ?
     
      0 : imagenActual + 1)
  }
  const anteriorImagen = () => {

    setimagenActual(imagenActual === 0 ? cantidad - 1 
     
       : imagenActual - 1)
      }
      

  return (
    
    <div className='  flex '>

<button onClick={suguientImagen}> <FontAwesomeIcon icon={faAngleLeft} className="text-4xl   hover:rotate-[360deg] duration-300 border-bg-blue-500 p-4  text-blue-500"/> </button>
{SliderImage.map((image, index) => (

<div className={imagenActual == index ?"relative slider active":"slider relative" }> {imagenActual === index && (
<>

<img key={index}  src={image} className=" h-96 
 w-96 duration-300 rounded-2xl hover:-translate-y-1.5 object-cover"/>
 
 <div className={imagenActual == index ?"flex flex-col justify-center items-center slider active absolute h-4/5 left-0 slider right-0 bottom-0 m-auto w-4/5 top-0 backdrop-blur-md bg-white/30   rounded-2xl  ":"flex flex-col justify-center items-center rounded-2xl slider  absolute h-4/5 left-0 slider right-0 bottom-0 m-auto w-4/5 top-0 backdrop-blur-md bg-white/30" }
 >
 
   <div  className='flex flex-col
    justify-center items-center'>
    <div>
      <p className='m-2 text-center  '>Disfrua de Photoviews con sus increibles
        funciones permiriendo una mejor experiancia
      </p>
    </div>
      <div>
        <a href='' className='
        text-white bg-blue-500 p-2 rounded hover:opacity-75 duration-100
        pointer
        '>
          Crear cuenta</a>
      </div>

   </div>
 </div>
</>

)}

</div>
   
))}
<button onClick={anteriorImagen }> <FontAwesomeIcon icon={faAngleRight} className="text-4xl   hover:rotate-[360deg] duration-300 border-bg-blue-500 p-4  text-blue-500"/> </button>

    </div>
  )
}
