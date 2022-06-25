import { NextPage } from 'next'
import AboutCard from '../src/components/AboutCard'
import BackButton from '../src/components/UI/BackButton'
import H1Title from '../src/components/UI/H1Title'

const aboutArray = [
  {
    text: '  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the',
    cardClass: '-ml-[700px] top-0 left-0',
    motionClass: 700,
  },
  {
    text: '  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the',
    cardClass: '-mr-[700px] bottom-0 right-0',
    motionClass: -700,
  },
]

const About: NextPage = () => {
  return (
    <div className="relative w-screen h-screen">
      <H1Title title="A propos" />

      <BackButton />
      <section className="absolute top-20 bottom-20 right-40 left-40">
        <div className="relative w-full h-full ">
          {aboutArray.map((card, index) => (
            <AboutCard
              text={card.text}
              cardClass={card.cardClass}
              motionClass={card.motionClass}
              key={index}
            />
          ))}
        </div>
      </section>
    </div>
  )
}
export default About
