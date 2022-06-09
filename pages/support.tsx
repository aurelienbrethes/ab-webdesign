import { NextPage } from 'next'
import BackButton from '../src/components/BackButton'
import Image from 'next/image'
import arrowBg from '../public/assets/arrowBg.png'
import SupportCard from '../src/components/supportCard'
import H1Title from '../src/components/UI/H1Title'

const supportContent = [
  {
    title: 'Title',
    content:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    supportClass: ' ',
  },
  {
    title: 'Title',
    content:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    supportClass: '',
  },
]

const Support: NextPage = () => {
  return (
    <div className="flex items-center h-screen">
      <H1Title title="Accompagnement" />
      <BackButton />
      <div className="relative w-full h-5/6">
        <Image
          src={arrowBg}
          alt="background arrows"
          layout="fill"
          objectFit="contain"
          className="-translate-y-28"
        />
        <div className="flex justify-around w-full translate-y-[300px]">
          {supportContent.map((card, index) => (
            <SupportCard
              title={card.title}
              key={index}
              content={card.content}
              supportClass={card.supportClass}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
export default Support
