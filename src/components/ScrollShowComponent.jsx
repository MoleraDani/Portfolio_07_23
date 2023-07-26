import { useState, useEffect, useRef } from 'react'

export const ScrollShowComponent = ({ className, children }) => {
  const ref = useRef()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const currentRef = ref.current
    const observer = new IntersectionObserver(
      ([entry]) => {
        // In this case isVisible will be true if the element is NOT intersecting
        setIsVisible(entry.isIntersecting)
      },
      {
        threshold: 0.3 // Adjust this value to control when the callback is fired
      }
    )

    if (ref.current) {
      observer.observe(currentRef)
    }

    // Cleanup
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, []) // Empty array ensures that effect is only run on mount and unmount

  return (
    <div
      className={`${className} ${isVisible ? 'animate-fadeIn' : 'opacity-0'}`}
      ref={ref}
    >
      {children}
    </div>
  )
}
