import { NextPage } from 'next'
import AboutCard from '../src/components/AboutCard'
import BackButton from '../src/components/UI/BackButton'
import H1Title from '../src/components/UI/H1Title'

const aboutArray = [
  {
    text: 'Après plusieurs expériences en tant que technicien en électronique puis technico-commercial, je décide en 2020 de me lancer dans le monde du web. En 2021, je suis une formation au sein de la wild code school de Biarritz afin de me reconvertir à 100% dans la création de site web et web mobile.',
    cardClass: '-ml-[700px] top-0 left-3 sm:left-8',
    motionClass: 700,
  },
  {
    text: "Aujourd'hui, après divers sites effectués durant ma formation et au sein de mon entreprise actuelle, je réponds à tout type de projets et serais heureux de vous guider à travers le choix de la solution la plus adaptée à votre besoin",
    cardClass: '-mr-[700px] bottom-0 right-3 sm:right-8',
    motionClass: -700,
  },
]

const About: NextPage = () => {
  return (
    <div className="relative flex items-center w-screen h-screen overflow-hidden">
      <H1Title title="A propos" />
      <BackButton />
      <section className="w-full h-3/4">
        <div className="relative w-full p-2 h-5/6">
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
