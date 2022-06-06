import { createContext, useContext } from 'react';
export type GlobalContent = {
  isHebrew?: boolean;
  setIsHebrew?: React.Dispatch<React.SetStateAction<boolean>>;
};
export const MyGlobalContext = createContext<GlobalContent>({});
export const useGlobalContext = () => useContext<GlobalContent>(MyGlobalContext);
