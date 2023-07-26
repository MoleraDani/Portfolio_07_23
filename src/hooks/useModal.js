import { useState } from 'react'

export const useModal = (initialValue = false) => {
  const [isOpen, setIsOpen] = useState(initialValue)

  const changeModal = () => {
    setIsOpen(!isOpen)
  }

  return { isOpen, changeModal }
}
