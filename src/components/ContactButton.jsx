import { useModal } from '../hooks/useModal'
import { ContactForm } from './ContactForm'
import { Modal } from './Modal'

export function ContactButton () {
  const { isOpen, changeModal } = useModal(false)

  return (
    <>
      <button
        className='mt-24 text-2xl p-3 bg-zinc-800 hover:bg-blue-700 rounded border-gray-50 border '
        onClick={changeModal}
      >
        Contáctame
      </button>
      <Modal isOpen={isOpen} changeModal={changeModal}>
        <ContactForm />
      </Modal>
    </>

  )
}
