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
      className={`absolute w-3/5 ${cardClass} bg-red-400 opacity-40 h-3/5`}
    >
      <p className="p-20">{text}</p>
    </motion.div>
  )
}

export default AboutCard
