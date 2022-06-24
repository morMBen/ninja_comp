import React, { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SquareButton from '../../../UI/buttons/squareButton/SquareButton.UI';
import Heading from '../../../UI/heading/Heading.UI';
import Input from '../../../UI/input/Input.UI';
import SelectUI from '../../../UI/selects/Select.UI';
import { RoundType } from '../SpeedRound.screen.types';
import { Wrapper } from './SpeedRound.screen.form.styles';
import { SpeedRoundScreenFromProps } from './SpeedRound.screen.form.types';

const SpeedRoundScreenFrom: React.FC<SpeedRoundScreenFromProps> = ({
  setRoundDetails,
  setIsTimerOn,
}) => {
  const [roundType, setRoundType] = useState<RoundType>('official');
  const [numOfObstacles, setNumOfObstacles] = useState<number>(0);
  const [name, setName] = useState<string>('');
  const navigate = useNavigate();
  const handleOnChange = ({ target }: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    switch (target.dataset.type) {
      case 'numOfObstacles':
        setNumOfObstacles(Number(target.value));
        break;
      case 'name':
        setName(target.value);
        break;
      case 'roundType':
        setRoundType(target.value as RoundType);
        break;
    }
  };

  const handleStart = () => {
    if (numOfObstacles > 1 && name.length > 1) {
      setRoundDetails({ roundType, numOfObstacles, name });
      setIsTimerOn(true);
    }
  };
  return (
    <Wrapper>
      <div className='SpeedRoundScreenFrom'>
        {' '}
        <div className='SpeedRoundScreenFrom__box'>
          <Heading headingType={'h5'}>Number Of Obstacles:</Heading>
          <SelectUI
            onChange={handleOnChange}
            type='numOfObstacles'
            options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]}
            value={numOfObstacles.toString()}
          />
          <Heading headingType={'h5'}>Round Type:</Heading>
          <SelectUI
            onChange={handleOnChange}
            type={'roundType'}
            options={['stopwatch', 'official', 'semi-official']}
            value={roundType}
          />
        </div>
        <div className='SpeedRoundScreenFrom__box'>
          <Heading headingType={'h5'}>Competitor Name:</Heading>
          <Input type='name' onChange={handleOnChange} value={name} />
          <br />
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <SquareButton type='approve' onClick={handleStart}>
              Start
            </SquareButton>
            <SquareButton
              onClick={() => {
                navigate('/');
              }}
            >
              Return
            </SquareButton>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default SpeedRoundScreenFrom;
