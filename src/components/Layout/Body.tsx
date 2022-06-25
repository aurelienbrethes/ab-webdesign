/* eslint-disable @next/next/no-page-custom-font */
import { ReactNode } from 'react'
import Image from 'next/image'
import cloudFooter from '../../../public/assets/cloudFooter.png'
import Footer from '../Footer'
import Head from 'next/head'

interface IBody {
  children: ReactNode
}

const Body = ({ children }: IBody): JSX.Element => {
  return (
    <div className="relative flex justify-center w-screen h-screen bg-gradient-to-tl from-zinc-700 to-zinc-900">
      <Head>
        <title>AB Web Design</title>
        <meta name="AB Web Design" content="Let's make a creative website" />
        <link rel="icon" href="/assets/imageLogo.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&family=Bebas+Neue&family=Press+Start+2P&family=Stick+No+Bills&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Image
        alt="clouds"
        src={cloudFooter}
        layout="fill"
        objectFit="contain"
        className="translate-y-40"
        property="priority"
      />
      <div className="flex justify-center max-w-8xl">
        <Footer />
        {children}
      </div>
    </div>
  )
}

export default Body
