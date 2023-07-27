import { CloseIcon } from './Icons'

export function Modal ({ children, isOpen, changeModal }) {
  const handleModalContentClick = (e) => {
    e.stopPropagation()
  }

  return (
    <article
      className={`fixed z-50 top-0 left-0 w-full min-h-screen bg-black bg-opacity-75 ${isOpen ? 'flex justify-center items-center' : 'hidden'}`}
      onClick={changeModal}
    >
      <div
        className='relative p-4 w-full max-w-lg min-h-50 max-h-150 overflow-auto bg-white rounded-lg'
        onClick={handleModalContentClick}
      >
        <button className='absolute top-4 right-4' onClick={changeModal}>
          <CloseIcon className='w-6 h-6 text-black hover:text-blue-700' />
        </button>
        {children}
      </div>
    </article>
  )
}
