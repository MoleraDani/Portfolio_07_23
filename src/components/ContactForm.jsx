import { useId } from 'react'

export function ContactForm () {
  const nameID = useId()
  const emailID = useId()
  const commentID = useId()

  const handleSubmit = (e) => {
    e.preventDefault()
    const query = Object.fromEntries(
      new window.FormData(e.target)
    )

    fetch('https://formsubmit.co/ajax/moleradani@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(query)
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then((json) => {
        console.log(json)
      })
      .catch((err) => {
        console.log(err)
      })
    console.log(query)
  }

  return (
    <form onSubmit={handleSubmit} className='space-y-4 text-gray-600'>
      <label htmlFor={nameID} className='block  font-medium'>Nombre </label>
      <input
        name='name'
        type='text'
        placeholder='Introduzca su nombre'
        id={nameID}
        className='w-full px-4 py-2 mt-1 block border-gray-300 rounded-md bg-white shadow sm:text-sm'
      />
      <label htmlFor={emailID} className='block  font-medium'>Correo</label>
      <input
        name='email'
        type='text'
        placeholder='Introduzca su correo'
        id={emailID}
        className='w-full px-4 py-2 mt-1 block border-gray-300 rounded-md bg-white shadow  sm:text-sm'
      />
      <label htmlFor={commentID} className='block  font-medium'>Comentario</label>
      <textarea
        name='comment'
        id={commentID}
        cols='30'
        rows='10'
        className='w-full px-4 py-2 mt-1 block border-gray-300 rounded-md bg-white shadow  sm:text-sm'
        defaultValue='Comentario por defecto'
      />
      <button
        type='submit'
        className='px-4 py-1 mt-1 bg-zinc-800 text-white rounded hover:bg-blue-700  '
      >
        Enviar
      </button>
    </form>
  )
}
