import LeftArrow from './LeftArrow'
import RightArrow from './RightArrow'
import CardSlider from './CardSlider'
import { ISliderItem } from '../../interfaces/Slider'
import { useContext } from 'react'
import AppContext from '../../context/Context'

interface IProps {
  sliderArray: ISliderItem[]
  ImageClassName: string
  sliderWidth: string
}

const Slider = ({ sliderArray, ImageClassName, sliderWidth }: IProps) => {
  const { selectedSlide } = useContext(AppContext)
  const sliderArrayLength = sliderArray.length

  return (
    <div className="flex items-center justify-center w-auto h-3/4 ">
      <LeftArrow sliderArrayLength={sliderArrayLength} />
      <CardSlider
        ImageClassName={ImageClassName}
        cardItem={sliderArray[selectedSlide]}
        sliderWidth={sliderWidth}
      />
      <RightArrow sliderArrayLength={sliderArrayLength} />
    </div>
  )
}

export default Slider
