import { FC, useState } from 'react';
import { MyGlobalContext } from '../contexts/global.context';

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
