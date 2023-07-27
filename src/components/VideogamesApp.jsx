import { ScrollShowComponent } from './ScrollShowComponent'

export function VideogamesApp () {
  return (
    <ScrollShowComponent className='h-auto bg-zinc-800 p-5 shadow-[0_0px_8px_-5px_rgba(255,255,255,0.9)] )'>
      <a href='https://moleradani-videogames-project.netlify.app/'>
        <figure className='flex flex-col gap-9'>
          <img
            className='cursor-pointer hover:transform hover:scale-105 transition-transform'
            src='https://screenshot-proxy.netlify.app/f_webp,w_336/https://d33wubrfki0l68.cloudfront.net/64bcd153e9250c00084e26fc/screenshot_2023-07-23-07-06-15-0000.png'
            alt='Imagen de la aplicación de videojuegos'
          />
          <figcaption className='flex flex-col gap-7'>
            <h4 className='text-2xl '>Aplicación de Videojuegos</h4>
            <p className='text-lg'>
              Aplicación con login, que permite buscar videojuegos, guardar
              en favoritos y poner comentarios. <br />
              Usando Javascript, React y Firebase.
            </p>
          </figcaption>
        </figure>
      </a>
    </ScrollShowComponent>
  )
}
