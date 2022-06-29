/* eslint-disable @next/next/no-page-custom-font */
import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import HomePage from '../src/components/HomePage'

const Home: NextPage = () => {
  return (
    <>
      <NextSeo
        title="AB Web Design"
        description="Création de site web : site vitrine, boutique e-commerce, optimisation SEO, site sur mesure ou wordpress"
        canonical="https://www.abwebdesign64.fr/about"
        openGraph={{
          url: 'https://www.abwebdesign64.fr/about',
          title: 'AB Web Design',
          description:
            'Création de site web : site vitrine, boutique e-commerce, optimisation SEO, site sur mesure ou wordpress',
          images: [
            {
              url: 'https://i.ibb.co/Bz1KvH9/let-s-make-a-creative-website.png',
              width: 300,
              height: 200,
              alt: 'logo AB web design',
            },
          ],
          site_name: 'AB Web Design',
        }}
      />
      <main>
        <HomePage />
      </main>
    </>
  )
}

export default Home
