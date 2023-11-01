import { StaticImageData } from 'next/image'

export interface ISliderItem {
  title: string
  description: string
  image: string | StaticImageData
  altImage: string
  link?: string
}
