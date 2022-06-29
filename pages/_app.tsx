import type { AppProps } from 'next/app'
import Body from '../src/components/Layout/Body'
import { AppContextProvider } from '../src/context/Context'
import '../styles/globals.css'
// import logo from '../public/assets/imageLogo.png'
import { DefaultSeo } from 'next-seo'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo
        title="AB Web Design"
        description="Création de site web : site vitrine, boutique e-commerce, optimisation SEO, site sur mesure ou wordpress"
        canonical="https://www.abwebdesign64.fr/"
        openGraph={{
          url: 'https://www.abwebdesign64.fr/',
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
      <AppContextProvider>
        <Body>
          <Component {...pageProps} />
        </Body>
      </AppContextProvider>
    </>
  )
}

export default MyApp
