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
    supportClass: 'translate-x-[300px] ',
  },
  {
    title: 'Title',
    content:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    supportClass: 'translate-x-[600px] ',
  },
  {
    title: 'Title',
    content:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    supportClass: ' translate-x-[900px]',
  },
  {
    title: 'Title',
    content:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    supportClass: 'translate-x-[1200px]',
  },
  {
    title: 'Title',
    content:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    supportClass: ' translate-x-[1500px]',
  },
  {
    title: 'Title',
    content:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    supportClass: 'translate-x-[1800px]',
  },
  {
    title: 'Title',
    content:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    supportClass: ' translate-x-[2100px]',
  },
  {
    title: 'Title',
    content:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    supportClass: 'translate-x-[2400px]',
  },
  {
    title: 'Title',
    content:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    supportClass: ' translate-x-[2700px]',
  },
  {
    title: 'Title',
    content:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    supportClass: '3000',
  },
]

const Support: NextPage = () => {
  return (
    <div className="flex items-center w-screen h-screen">
      <H1Title title="Accompagnement" />
      <BackButton />
      <div className="relative w-full h-5/6">
        <Image
          src={arrowBg}
          alt="background arrows"
          layout="fill"
          objectFit="contain"
          className=" -translate-y-28"
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
