/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, useState } from "react";

interface AppContextInterface {
    selectedSlide: number;
    setSelectedSlide: React.Dispatch<React.SetStateAction<number>>;

}

const AppContext = createContext<AppContextInterface>({
    selectedSlide: 0,
    setSelectedSlide: () => {},
  });
  
  export default AppContext;

type Props = { children: React.ReactNode };
export const AppContextProvider: React.FC<Props> = ({ children }) => {

    const [selectedSlide, setSelectedSlide] = useState<number>(0);

    return (
        <AppContext.Provider
        value={{
        selectedSlide,
        setSelectedSlide 
        }}>
        {children}
      </AppContext.Provider>
    )
}