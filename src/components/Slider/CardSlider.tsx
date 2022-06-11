import React from 'react'
import { ISliderItem } from '../../interfaces/Slider'
import Image from 'next/image'
import router from 'next/router'

interface IProps {
  cardItem: ISliderItem
}

const CardSlider = ({ cardItem }: IProps) => {
  return (
  <div className="relative flex flex-col items-center justify-between w-2/5 h-full">
    <h1>{cardItem.title}</h1>
    <Image src={cardItem.image} alt={cardItem.altImage} layout="fill" objectFit='contain'/>
    <p className='text-center'>{cardItem.description}</p>
    <span className='absolute inset-0' onClick={() => router.push(`${cardItem.link}`)} />
  </div>
  )
}

export default CardSlider
