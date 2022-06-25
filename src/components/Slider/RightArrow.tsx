import rightArrow from '../../../public/assets/rightArrow.png'
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

  const handleChangeSlideAfter = () => {
    setSelectedSlide(setIndexSlider(indexSlider, '+', selectedSlide))
  }

  return (
    <button
      type="button"
      className="relative flex justify-center w-1/12 h-10 ml-4 duration-300 sm:h-16 md:h-20 sm:hover:translate-x-3"
      onClick={() => handleChangeSlideAfter()}
    >
      <Image
        src={rightArrow}
        layout="fill"
        objectFit="contain"
        alt="right arrow"
      />
    </button>
  )
}

export default LeftArrow
