import { NextPage } from 'next'
import BackButton from '../src/components/BackButton'
import H1Title from '../src/components/UI/H1Title'

const Projects: NextPage = () => {
  return (
    <div className="z-40 w-screen h-screen">
      <H1Title title="Projets" />
      <BackButton />
    </div>
  )
}
export default Projects
