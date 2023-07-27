import { ScrollShowComponent } from './ScrollShowComponent'

export function ReadingList () {
  return (
    <ScrollShowComponent className='h-auto bg-zinc-800 p-5 shadow-[0_0px_8px_-5px_rgba(255,255,255,0.9)] )'>
      <a href='https://reading-list-121023d.netlify.app/'>
        <figure className='flex flex-col gap-9'>
          <img
            className='flex-shrink-0 cursor-pointer hover:transform hover:scale-105 transition-transform'
            src='https://screenshot-proxy.netlify.app/f_jpg,w_336/https://d33wubrfki0l68.cloudfront.net/64b5646fb3b8521eef22e964/screenshot_2023-07-17-15-55-31-0000.png'
            alt='Imagen de la aplicación de videojuegos'
          />
          <figcaption className='flex flex-col gap-7'>
            <h4 className='text-2xl '>Lista de lectura</h4>
            <p className='text-lg'>
              Aplicación para guardar libros en una lista de lectura. <br />
              Usando Javascript, React y Zustand.
            </p>
          </figcaption>
        </figure>
      </a>
    </ScrollShowComponent>
  )
}
