import { ReactNode } from 'react'
import Image from 'next/image'
import cloudFooter from '../../../public/assets/cloudFooter.png'
import Footer from '../Footer'

interface IBody {
  children: ReactNode
}

const Body = ({ children }: IBody): JSX.Element => {
  return (
    <div className="w-screen h-screen bg-gradient-to-tl from-zinc-700 to-zinc-900">
      <Image
        alt="clouds"
        src={cloudFooter}
        layout="fill"
        objectFit="contain"
        className="translate-y-40"
      />
      <Footer />
      {children}
    </div>
  )
}

export default Body
