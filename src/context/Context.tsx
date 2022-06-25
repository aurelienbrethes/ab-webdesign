/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, useState } from 'react'

interface AppContextInterface {
  selectedSlide: number
  setSelectedSlide: React.Dispatch<React.SetStateAction<number>>
  introductionImage: boolean
  setIntroductionImage: React.Dispatch<React.SetStateAction<boolean>>
  menuDelay: string
  setMenuDelay: React.Dispatch<React.SetStateAction<string>>
  activeService: string
  setActiveService: React.Dispatch<React.SetStateAction<string>>
}

const AppContext = createContext<AppContextInterface>({
  selectedSlide: 0,
  setSelectedSlide: () => {},
  introductionImage: true,
  setIntroductionImage: () => {},
  menuDelay: 'delay-1000 duration-1000',
  setMenuDelay: () => {},
  activeService: '',
  setActiveService: () => {},
})

export default AppContext

type Props = { children: React.ReactNode }
export const AppContextProvider: React.FC<Props> = ({ children }) => {
  const [selectedSlide, setSelectedSlide] = useState<number>(0)
  const [introductionImage, setIntroductionImage] = useState<boolean>(true)
  const [menuDelay, setMenuDelay] = useState('delay-1000 duration-1000')
  const [activeService, setActiveService] = useState('')

  console.log(activeService)

  return (
    <AppContext.Provider
      value={{
        selectedSlide,
        setSelectedSlide,
        introductionImage,
        setIntroductionImage,
        menuDelay,
        setMenuDelay,
        activeService,
        setActiveService,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
