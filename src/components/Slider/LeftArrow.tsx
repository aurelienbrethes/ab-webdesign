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
  <button type='button' className='relative w-20 h-40 duration-300 hover:-translate-x-5' onClick={() => handleChangeSlideBelow()}>
    <Image src={leftArrow} alt="left arrow" layout='fill' objectFit='contain'/>
  </button>
  )
}

export default LeftArrow
