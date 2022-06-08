import { NextPage } from 'next'
import BackButton from '../src/components/BackButton'

const About: NextPage = () => {
  return (
    <div className="w-screen h-screen">
      <p>About</p>
      <BackButton />
    </div>
  )
}
export default About
