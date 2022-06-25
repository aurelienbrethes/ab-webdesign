import { ISliderItem } from '../../interfaces/Slider'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import router from 'next/router'
import H2Title from '../UI/H2Title'

interface IProps {
  cardItem: ISliderItem
  ImageClassName: string
  sliderWidth: string
}

const CardSlider = ({ cardItem, ImageClassName, sliderWidth }: IProps) => {
  const [hasLink, setHasLink] = useState('hover:scale-105')

  useEffect(() => {
    if (cardItem.link) {
      setHasLink('cursor-pointer hover:grayscale')
    }
  }, [])

  return (
    <div
      className={`flex flex-col items-center justify-between h-full mx-20 ${sliderWidth}`}
    >
      <H2Title title={cardItem.title} />
      <div className={`${ImageClassName} relative`}>
        <Image
          src={cardItem.image}
          alt={cardItem.altImage}
          layout="fill"
          objectFit="contain"
          className={`${hasLink} duration-200`}
          onClick={() => cardItem.link && router.push(cardItem.link)}
        />
      </div>
      <div className="flex items-center justify-center w-screen py-5 bg-red-500 h-1/4 bg-opacity-40">
        <p className="w-2/5 text-center">{cardItem.description}</p>
      </div>
    </div>
  )
}

export default CardSlider
