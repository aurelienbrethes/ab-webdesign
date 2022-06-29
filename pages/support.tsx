import { NextPage } from 'next'
import BackButton from '../src/components/UI/BackButton'
import Slider from '../src/components/Slider'
import H1Title from '../src/components/UI/H1Title'
import talk from '../public/assets/talk.svg'
import drawing from '../public/assets/drawing.svg'
import development from '../public/assets/development.svg'
import deploy from '../public/assets/deploy.svg'
import monitoring from '../public/assets/monitoring.svg'
import { NextSeo } from 'next-seo'

const supportArray = [
  {
    id: 1,
    title: "Première étape : L'échange",
    description:
      "Prise de contact et échange d'informations nécessaires afin de structurer ensemble votre projet",
    image: talk,
    altImage: 'talking logo',
  },
  {
    id: 2,
    title: 'Deuxième étape : la maquette',
    description:
      "Proposition d'une maquette complète correspondant à vos attentes. Celle-ci est modifiable à souhait jusqu'à ce qu'elle corresponde parfaitement à vos envies",
    image: drawing,
    altImage: 'drawing logo',
  },
  {
    id: 3,
    title: 'Troisième étape : La phase de développement',
    description:
      "Suivant l'ampleur du projet, nous fixons ensemble des rendez-vous intermédiaires pour suivre l'avancé du projet et être sûr qu'il corresponde toujours à vos attentes",
    image: development,
    altImage: 'development logo',
  },
  {
    id: 4,
    title: 'Quatrième étape : Le déploiement',
    description:
      'Une fois le projet entièrement développé et fonctionnel, il est déployé sur le nom de domaine de votre choix.',
    image: deploy,
    altImage: 'rocket logo',
  },
  {
    id: 5,
    title: 'Cinquième étape : Le suivi !',
    description:
      "La création d'un site internet à toujours un but précis. Il est donc important de suivre l'évolution de celui-ci, que ce soit dans ses performances ou sa prise en main, afin d'améliorer certains aspects ou simplement s'assurer qu'il réponde bien à votre besoin.",
    image: monitoring,
    altImage: 'monitoring logo',
  },
]

const ImageClassName = 'w-1/2 h-20'

const Support: NextPage = () => {
  return (
    <>
      <NextSeo
        title="AB Web Design"
        description="Détail de l'accompagnement proposé, de la création du projet jusqu'à son suivi après sa mise en ligne"
        canonical="https://www.abwebdesign64.fr/support"
        openGraph={{
          url: 'https://www.abwebdesign64.fr/support',
          title: 'AB Web Design',
          description:
            "Détail de l'accompagnement proposé, de la création du projet jusqu'à son suivi après sa mise en ligne",
          images: [
            {
              url: 'https://i.ibb.co/Bz1KvH9/let-s-make-a-creative-website.png',
              width: 300,
              height: 200,
              alt: 'logo AB web design',
            },
          ],
          site_name: 'AB Web Design',
        }}
      />
      <div className="z-40 flex items-center justify-center w-screen h-screen">
        <H1Title title="Accompagnement" />
        <BackButton />
        <Slider sliderArray={supportArray} ImageClassName={ImageClassName} />
      </div>
    </>
  )
}
export default Support
