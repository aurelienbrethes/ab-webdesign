import leftArrow from '../../../public/assets/leftArrow.png'
import Image from 'next/image'
import { useContext } from 'react';
import AppContext from '../../context/Context';
import { setIndexSlider } from '../../Hooks/utils';

interface IProps {
  sliderArrayLength: number
}

const LeftArrow = ({sliderArrayLength} : IProps) => {
  const { setSelectedSlide, selectedSlide } = useContext(AppContext);
  let indexSlider = 0;
  indexSlider = sliderArrayLength;
  const handleChangeSlideBelow = () => {
    setSelectedSlide(setIndexSlider(indexSlider, "-", selectedSlide))
  };

  return (
  <button type='button' className='relative w-20 h-full' onClick={() => handleChangeSlideBelow()}>
    <Image src={leftArrow} alt="left arrow" layout='fill' objectFit='contain'  width={40} height={40} />
  </button>
  )
}

export default LeftArrow
