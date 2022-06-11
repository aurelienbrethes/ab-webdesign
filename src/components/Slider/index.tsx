import LeftArrow from './LeftArrow'
import RightArrow from './RightArrow'
import CardSlider from './CardSlider'
import { ISliderItem } from '../../interfaces/Slider'
import { useContext } from 'react'
import AppContext from '../../context/Context'

interface IProps {
  sliderArray: ISliderItem[]
}

const Slider = ({ sliderArray}: IProps) => {
  const { selectedSlide } = useContext(AppContext);
  const sliderArrayLength = sliderArray.length;


  return (
    <div className="flex items-center justify-center w-full h-3/4 ">
      <LeftArrow sliderArrayLength={sliderArrayLength} />
        <CardSlider cardItem={sliderArray[selectedSlide]} />
      <RightArrow sliderArrayLength={sliderArrayLength} />
    </div>
  )
}

export default Slider
