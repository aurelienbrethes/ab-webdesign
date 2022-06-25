import leftArrow from '../../../public/assets/leftArrow.png'
import Image from 'next/image'
import { useContext } from 'react'
import AppContext from '../../context/Context'
import { setIndexSlider } from '../../Hooks/utils'

interface IProps {
  sliderArrayLength: number
}

const LeftArrow = ({ sliderArrayLength }: IProps) => {
  const { setSelectedSlide, selectedSlide } = useContext(AppContext)
  let indexSlider = 0
  indexSlider = sliderArrayLength
  const handleChangeSlideBelow = () => {
    setSelectedSlide(setIndexSlider(indexSlider, '-', selectedSlide))
  }

  return (
    <button
      type="button"
      className="relative flex justify-center w-1/12 h-10 mr-4 duration-300 sm:h-16 md:h-20 sm:hover:-translate-x-3"
      onClick={() => handleChangeSlideBelow()}
    >
      <Image
        src={leftArrow}
        alt="left arrow"
        layout="fill"
        objectFit="contain"
      />
    </button>
  )
}

export default LeftArrow
