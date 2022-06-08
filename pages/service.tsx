import { useEffect, useState } from 'react'

interface IService {
  id: number
  title: string
  description: string
}

const Service = ({ title, description }: IService) => {
  const openClass = 'w-72'
  const closeClass = 'w-20'
  const [open, setOpen] = useState(false)
  const [activeClass, setActiveClass] = useState(closeClass)

  useEffect(() => {
    if (open) {
      setActiveClass(openClass)
    } else {
      setActiveClass(closeClass)
    }
  }, [open])
  const handleOpen = () => {
    setOpen(!open)
  }

  return (
    <>
      <div
        className={`flex relative flex-col h-5/6 items-center ${activeClass} bg-red-300 duration-200 p-7`}
      >
        <h2 className="mb-3">{title}</h2>
        {open && <p className="text-xs">{description}</p>}
        <span
          className="absolute inset-0 z-50 cursor-pointer"
          onClick={() => handleOpen()}
        />
      </div>
    </>
  )
}

export default Service
