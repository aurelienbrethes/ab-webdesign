import { motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import spaceShip from '../../public/assets/spaceShip.png'

const HomePage = () => {
  const [posX, setPosX] = useState(100)

  function onMouseMove(event: MouseEvent) {
    setPosX(event.clientX)
  }

  useEffect(() => {
    window.addEventListener('mousemove', onMouseMove)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
    }
  }, [])

  // Options for animation menu dropdown

  const variationsDesktop = {
    move: { x: posX },
    start: { x: 0 },
  }

  return (
    <div className="flex flex-col h-full">
      <div className="absolute flex items-center w-full h-28 bottom-40">
        <motion.div
          variants={variationsDesktop}
          animate={posX === 0 ? 'start' : 'move'}
          className="absolute flex items-center w-10"
        >
          <Image
            alt="spaceShip"
            src={spaceShip}
            width={100}
            height={140}
            objectFit="cover"
          />
        </motion.div>
      </div>
    </div>
  )
}

export default HomePage
