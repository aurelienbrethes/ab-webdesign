import type { NextPage } from 'next'
import Head from 'next/head'
import HomePage from '../src/components/HomePage'
import Image from 'next/image'
import cloudFooter from '../public/assets/cloudFooter.png'
import Footer from '../src/components/Footer'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>AB Web Design</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/imageLogo.png" />
      </Head>
      <body>
        <div className="w-screen h-screen bg-gradient-to-tl from-zinc-700 to-zinc-900">
          <HomePage />
          <Image
            alt="clouds"
            src={cloudFooter}
            layout="fill"
            objectFit="contain"
            className="translate-y-40"
          />
          {/* <Footer /> */}
        </div>
      </body>
    </div>
  )
}

export default Home
