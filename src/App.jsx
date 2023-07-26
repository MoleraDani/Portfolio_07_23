import './App.css'
import {
  ReactLogo,
  HTMLLogo,
  CSSLogo,
  JavascriptLogo
} from './components/Icons'
import profileImage from './assets/profileImage.webp'
import { VideogamesApp } from './components/VideogamesApp'
import { ReadingList } from './components/ReadingList'
import { ContactButton } from './components/ContactButton'
import { Header } from './components/Header'

function App () {
  return (
    <>
      <Header />
      <main>
        <section className='h-[75vh] flex flex-col items-center text-center gap-3 '>
          <img
            src={profileImage}
            alt='Dani Molera image'
            className='rounded-full w-20 mt-10'
          />
          <p className='text-base'>Hola, soy <span className='text-blue-700 text-lg'>Dani</span></p>
          <h1 className='pt-8 text-3xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-gray-50 via-gray-350 to-gray-600'>
            Desarrollador Frontend, <br /> buscando mi primera oportunidad laboral
          </h1>
          <ContactButton />
        </section>
        <section className='flex justify-evenly mb-8 items-center h-[18vh] bg-zinc-800 shadow-[0_0px_8px_-5px_rgba(255,255,255,0.9)]'>
          <HTMLLogo className='w-16 h-16' />
          <CSSLogo className='w-24 h-24' />
          <JavascriptLogo className='w-16 h-16' />
          <ReactLogo className='w-16 h-16' />
        </section>
        <section className='grid grid-cols-4 gap-4 my-4 w-4/5 mx-auto object-fit'>
          <ReadingList />
          <VideogamesApp />
        </section>
      </main>
    </>
  )
}

export default App
