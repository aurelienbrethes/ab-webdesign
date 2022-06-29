import { NextPage } from 'next'
import BackButton from '../src/components/UI/BackButton'
import Slider from '../src/components/Slider'
import H1Title from '../src/components/UI/H1Title'
import blocktech from '../public/assets/blocktech.png'
import portfolio from '../public/assets/portfolio.png'
import blindCrashTest from '../public/assets/blindCrashTest.png'
import droneMetashop from '../public/assets/droneMetashop.png'
import { NextSeo } from 'next-seo'

const sliderArray = [
  {
    id: 1,
    title: 'Blocktech',
    description:
      "Site e-commerce développé au sein de l'entreprise Digital Copilote afin d'acheter divers objets en crypto-monnaies",
    image: blocktech,
    altImage: 'Blocktech Logo',
    link: 'https://ninja-lab-crypto-hightech.vercel.app/',
  },
  {
    id: 2,
    title: 'Portfolio',
    description: 'Portfolio de présentation pour candidat ou auto-entrepreneur',
    image: portfolio,
    altImage: 'accueil de mon portfolio',
    link: 'https://aurelienbrethes.github.io/my_portfolio/',
  },
  {
    id: 3,
    title: 'Blind-Crash-Test',
    description:
      'Application de Blind-Test développée en groupe lors de ma formation à la wil code school de Biarritz',
    image: blindCrashTest,
    altImage: "l'application web Blind Crash Test",
    link: 'https://marie5060.github.io/Blind-Crash-Test/',
  },
  {
    id: 4,
    title: 'Drone Metashop',
    description:
      "Site e-commerce avec un seul produit développé au sein de l'entreprise Digital Copilote, paiement en crypto-monnaies",
    image: droneMetashop,
    altImage: "l'application web Blind Crash Test",
    link: 'https://ninja-metashop-git-dev-digitalcopilote.vercel.app/',
  },
]

const ImageClassName = 'w-full h-32 sm:h-40 md:h-60'

const Projects: NextPage = () => {
  return (
    <>
      <NextSeo
        title="AB Web Design"
        description="Exemples de projets portés par AB Web Design : e-commerce, wordpress, portfolio, application web"
        canonical="https://www.abwebdesign64.fr/projects"
        openGraph={{
          url: 'https://www.abwebdesign64.fr/projects',
          title: 'AB Web Design',
          description:
            'Exemples de projets portés par AB Web Design : e-commerce, wordpress, portfolio, application web',
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
        <H1Title title="Projets" />
        <BackButton />
        <Slider ImageClassName={ImageClassName} sliderArray={sliderArray} />
      </div>
    </>
  )
}
export default Projects
