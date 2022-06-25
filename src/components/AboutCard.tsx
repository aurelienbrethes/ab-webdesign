import { motion } from 'framer-motion'

interface IAboutCard {
  text: string
  cardClass: string
  motionClass: number
}

const AboutCard = ({ text, cardClass, motionClass }: IAboutCard) => {
  return (
    <motion.div
      animate={{ x: motionClass }}
      transition={{ ease: 'easeOut', duration: 0.5 }}
      className={`absolute sm:w-3/5 w-7/12 h-1/2 -my-2 ${cardClass} flex justify-center items-center bg-red-500 bg-opacity-40 sm:h-3/5`}
    >
      <p className="p-5 text-xs text-justify sm:text-base md:p-20">{text}</p>
    </motion.div>
  )
}

export default AboutCard
