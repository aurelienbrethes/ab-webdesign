import LeftArrow from './LeftArrow'
import RightArrow from './RightArrow'
import Image from 'next/image'
import { ISliderItem } from '../../interfaces/Slider'
import { useContext, useEffect, useState } from 'react'
import AppContext from '../../context/Context'
import H2Title from '../UI/H2Title'

interface IProps {
  sliderArray: ISliderItem[]
  ImageClassName: string
}

const Slider = ({ sliderArray, ImageClassName }: IProps) => {
  const { selectedSlide } = useContext(AppContext)
  const sliderArrayLength = sliderArray.length
  const cardItem = sliderArray[selectedSlide]
  const [hasLink, setHasLink] = useState('hover:scale-105')

  useEffect(() => {
    if (cardItem.link) {
      setHasLink('cursor-pointer hover:grayscale')
    }
  }, [])

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen">
      <H2Title title={cardItem.title} />
      {sliderArray && (
        <div className="flex items-center justify-around w-full md:justify-center">
          <LeftArrow sliderArrayLength={sliderArrayLength} />
          <div className={`${ImageClassName} w-2/3 relative my-8`}>
            <a href={cardItem.link} target="blank">
              <Image
                src={cardItem.image}
                alt={cardItem.altImage}
                layout="fill"
                objectFit="contain"
                className={`${hasLink} duration-200`}
              />
            </a>
          </div>
          <RightArrow sliderArrayLength={sliderArrayLength} />
        </div>
      )}
      <div className="flex items-center justify-center w-screen py-5 bg-gradient-to-r from-red-500/0 via-red-500/50 to-red-500/0 h-1/4 ">
        <p className="px-3 text-sm text-center sm:text-base md:w-2/5">
          {cardItem.description}
        </p>
      </div>
    </div>
  )
}

export default Slider
