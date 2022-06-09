import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface IService {
  title: string
  description: string
}

const Service = ({ title, description }: IService) => {
  const openClass = 'w-72'
  const closeClass = 'w-20'
  const [titleClass, setTitleClass] = useState('mb-3')
  const [open, setOpen] = useState(false)
  const [activeClass, setActiveClass] = useState(closeClass)

  useEffect(() => {
    if (open) {
      setActiveClass(openClass)
      setTitleClass('')
    } else {
      setActiveClass(closeClass)
      setTitleClass('text-center w-3')
    }
  }, [open])

  const handleOpen = () => {
    setOpen(!open)
  }

  // Options for opacity animation menu dropdown
  const variations = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  }
  return (
    <>
      <div
        className={`flex relative flex-col h-5/6 justify-center items-center ${activeClass} bg-red-400 opacity-40 duration-200 p-7`}
      >
        <h2 className={`${titleClass}`}>{title}</h2>
        <motion.div
          variants={variations}
          animate={open ? 'visible' : 'hidden'}
          transition={{
            duration: 0.5,
          }}
        >
          {open && <p className="my-8 text-xs">{description}</p>}
        </motion.div>
        <span
          className="absolute inset-0 z-50 cursor-pointer"
          onClick={() => handleOpen()}
        />
      </div>
    </>
  )
}

export default Service
