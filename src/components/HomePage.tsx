import { motion } from 'framer-motion'
import Image from 'next/image'
import { MutableRefObject, useEffect, useRef, useState } from 'react'
import spaceShipImage from '../../public/assets/spaceShip.png'

const titles = [
  {
    label: 'titre 1',
    height: 'translate-y-40',
    index: 1,
  },
  {
    label: 'titre 2',
    height: 'translate-y-20',
    index: 2,
  },
  {
    label: 'titre 3',
    height: 'translate-y-72',
    index: 3,
  },
  {
    label: 'titre 4',
    height: 'translate-y-20',
    index: 4,
  },
]

const HomePage = () => {
  const [posX, setPosX] = useState(100)
  const [posY, setPosY] = useState(0)
  const [spaceShipHeight, setSpaceShipHeight] = useState(0)
  const [shoot, setShoot] = useState(false)

  const spaceShip = useRef(null)

  // Calculate spaceShip height
  function heightCalcul(element: MutableRefObject<HTMLDivElement | null>) {
    if (element.current) {
      const rect = element.current.getBoundingClientRect()
      setSpaceShipHeight(rect.top)
    }
    return false
  }

  useEffect(() => {
    spaceShip && heightCalcul(spaceShip)
  }, [])

  const handleClickSpaceShip = () => {
    setShoot(true)
  }

  // Get the mouse current position
  function onMouseMove(event: MouseEvent) {
    setPosX(event.clientX)
    setPosY(event.clientY)
  }

  useEffect(() => {
    window.addEventListener('mousemove', onMouseMove)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
    }
  }, [])

  // Options for animation
  const variationsSpaceShip = {
    move: { x: posX - 14 },
    start: { x: 0 },
  }

  const variationsBullet = {
    move: { y: posY - spaceShipHeight + 50 },
    start: { y: 20 },
  }

  return (
    <div className="flex flex-col h-full ">
      <div className="flex justify-around w-full">
        {titles.map((title) => (
          <button
            type="button"
            key={title.index}
            className={`z-50 ${title.height} cursor-pointer`}
            onClick={() => handleClickSpaceShip()}
          >
            {title.label}
          </button>
        ))}
      </div>
      <div
        className="absolute bottom-0 flex items-end w-full h-28"
        ref={spaceShip}
      >
        <motion.div
          variants={variationsSpaceShip}
          animate={posX === 0 ? 'start' : 'move'}
          className="absolute flex flex-col items-center w-10 h-40 "
        >
          <motion.div
            variants={variationsBullet}
            transition={{ duration: 0.2 }}
            animate={shoot ? 'move' : 'start'}
            className="absolute w-2"
          >
            <span className="absolute w-2 h-2 bg-white rounded-lg" />
          </motion.div>
          <Image
            alt="spaceShip"
            src={spaceShipImage}
            width={100}
            height={140}
            objectFit="cover"
            className="absolute bottom-0 h-full"
          />
        </motion.div>
      </div>
      <button
        type="button"
        className="z-50 cursor-pointer"
        onClick={() => setShoot(false)}
      >
        Reset
      </button>
    </div>
  )
}

export default HomePage
