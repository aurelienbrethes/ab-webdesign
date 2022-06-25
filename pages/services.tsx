/* eslint-disable react/no-unescaped-entities */
import { NextPage } from 'next'
import BackButton from '../src/components/UI/BackButton'
import Service from '../src/components/Service'
import H1Title from '../src/components/UI/H1Title'

const services = [
  {
    id: 1,
    title: 'V I T R I N E',
    description:
      "Exister sur internet devient aujourd'hui obligatoire pour bon nombre d'entreprises ou d'associations. Les réseaux sociaux permettent de diffuser des informations à une communauté qui vous connaît déjà. Le site vitrine permet quant à lui de toucher des gens qui ne vous connaissent pas encore, grâce notamment aux moteurs de recherche. Il est la meilleure option pour élargir votre visibilité !",
  },
  {
    id: 2,
    title: 'S E O',
    description:
      'SEO signifie "Search Engine Optimization". Google scanne tous les jours des millions de sites internet afin de les classer selon une multitude de points différents. Il est donc important de connaître ces points essentiels lors de la création de votre site pour maximiser votre visibilité.',
  },
  {
    id: 3,
    title: 'E - C O M M E R C E',
    description:
      "Avoir une boutique en ligne devient un excellent moyen d'augmenter ses ventes avec très peu de frais. Il existe une multitude de façon de créer un site e-commerce aujourd'hui, le tout étant de bien choisir sa solution en fonction de son besoin.",
  },
  {
    id: 4,
    title: 'A P P L I C A T I O N',
    description:
      "La création d'application n'a pas pour but d'augmenter la visibilité ou de vendre un produit, mais plutôt de répondre techniquement à un besoin (prise de rendez-vous, commande de pizza en ligne, inscription à un évènement, simple divertissement...)",
  },
]

const Services: NextPage = () => {
  return (
    <div className="relative flex items-center w-screen h-screen overflow-hidden ">
      <H1Title title="Services" />
      <p className="absolute p-3 text-xs italic sm:text-sm sm:p-10 top-20">
        Quelque soit votre style de projet, tous les sites proposés sont conçus
        en format responsive, de façon à pouvoir être utilisés sur tout type
        d'écrans
      </p>
      <section className="flex justify-around w-full pt-32 h-5/6">
        {services.map((service) => (
          <Service
            title={service.title}
            description={service.description}
            id={service.id}
            key={service.id}
          />
        ))}
      </section>
      <BackButton />
    </div>
  )
}
export default Services
