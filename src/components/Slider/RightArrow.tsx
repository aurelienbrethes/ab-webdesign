import rightArrow from '../../../public/assets/rightArrow.png'
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

  

  const handleChangeSlideAfter = () => {
    setSelectedSlide(setIndexSlider(indexSlider, "+", selectedSlide))
  };

  console.log(selectedSlide);

  return (
  <button type='button' className='relative w-20 h-full' onClick={() => handleChangeSlideAfter()}>
    <Image src={rightArrow} layout='fill' objectFit='contain' alt="right arrow" width={40} height={40} />
  </button>
  )
}

export default LeftArrow
