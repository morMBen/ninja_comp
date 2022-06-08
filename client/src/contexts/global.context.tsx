import { createContext, useContext, FC, useState } from 'react';
export type GlobalContent = {
  isHebrew?: boolean;
  setIsHebrew?: React.Dispatch<React.SetStateAction<boolean>>;
};
export const MyGlobalContext = createContext<GlobalContent>({});
export const useGlobalContext = () => useContext<GlobalContent>(MyGlobalContext);

type Props = {
  children: JSX.Element;
};

const GlobalContextProvider: FC<Props> = (props) => {
  const [isHebrew, setIsHebrew] = useState<boolean>(false);
  return (
    <MyGlobalContext.Provider
      value={{
        isHebrew,
        setIsHebrew,
      }}
    >
      {props.children}
    </MyGlobalContext.Provider>
  );
};
export default GlobalContextProvider;
