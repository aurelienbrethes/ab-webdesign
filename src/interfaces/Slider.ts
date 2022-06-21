import { StaticImageData } from 'next/image'

export interface ISliderItem {
  id: number
  title: string
  description: string
  image: string | StaticImageData
  altImage: string
  link?: string
}
