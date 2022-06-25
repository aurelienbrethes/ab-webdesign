import { motion } from 'framer-motion'
import { useContext, useEffect, useState } from 'react'
import AppContext from '../context/Context'
import H2Title from './UI/H2Title'

interface IService {
  title: string
  description: string
  id: number
}

const Service = ({ title, description, id }: IService) => {
  const { activeService, setActiveService } = useContext(AppContext)
  const openClass = 'w-60 sm:w-72 md:w-96'
  const closeClass = 'w-20'
  const closerClass = 'w-3 sm:w-20'
  const [titleClass, setTitleClass] = useState('mb-3')
  const [open, setOpen] = useState(false)
  const [activeClass, setActiveClass] = useState(closeClass)

  useEffect(() => {
    if (activeService === title) {
      setActiveClass(openClass)
      setTitleClass('')
      setOpen(true)
    } else {
      if (activeService) {
        setActiveClass(closerClass)
      } else {
        setActiveClass(closeClass)
      }
      setTitleClass('text-center w-3')
      setOpen(false)
    }
  }, [activeService])

  const handleOpen = () => {
    if (activeService !== title) {
      setActiveService(title)
    } else {
      setActiveService('')
    }
  }

  // Options for opacity animation
  const variations = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  }
  return (
    <motion.div
      animate={{ y: 700 }}
      transition={{ ease: 'easeOut', duration: 0.3, delay: id * 0.1 }}
      className={`flex -mt-[700px] relative flex-col h-5/6 justify-center items-center ${activeClass} bg-red-500 bg-opacity-40 duration-200 px-4 sm:px-6`}
    >
      <H2Title title={title} className={`${titleClass}`} />
      <motion.div
        variants={variations}
        animate={open ? 'visible' : 'hidden'}
        transition={{
          duration: 0.5,
        }}
      >
        {open && <p className="my-8 text-xs text-justify">{description}</p>}
      </motion.div>
      <span
        className="absolute inset-0 z-50 cursor-pointer"
        onClick={() => handleOpen()}
      />
    </motion.div>
  )
}

export default Service
