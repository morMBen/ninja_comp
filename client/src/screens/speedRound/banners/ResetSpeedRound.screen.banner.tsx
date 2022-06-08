import React from 'react';
import Banner from '../../../UI/bunner/Banner';
import SquareButton from '../../../UI/buttons/squareButton/SquareButton.UI';
import Heading from '../../../UI/heading/Heading.UI';

type Props = {
  resetCallback: () => void;
  setResetBanner: React.Dispatch<React.SetStateAction<JSX.Element | null>>;
};
const ResetSpeedRoundScreenBanner: React.FC<Props> = ({ resetCallback, setResetBanner }) => {
  return (
    <Banner
      heading={
        <>
          <Heading type='h2'>Are you sure?</Heading>
        </>
      }
      buttons={
        <>
          <SquareButton
            type={'approve'}
            onClick={() => {
              resetCallback();
              setResetBanner(null);
            }}
          >
            Yes
          </SquareButton>
          <SquareButton
            type={'cancel'}
            onClick={() => {
              setResetBanner(null);
            }}
          >
            No
          </SquareButton>
        </>
      }
      footer={
        <>
          <Heading type='h4'>If you click Yes, you will not be able to recover the data.</Heading>
        </>
      }
    />
  );
};

export default ResetSpeedRoundScreenBanner;
