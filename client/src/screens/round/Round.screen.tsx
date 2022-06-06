import StopWatchButton from '../../UI/buttons/StopWatchButton.UI';
import { Wrapper, WrapperCenter } from './Round.screen.styles';
import { RoundProps } from './Round.screen.types';

const Round: React.FC<RoundProps> = ({ header, body, footer }) => {
  return (
    <Wrapper>
      <div className='round__body'>
        <div className='round__header'>{header}</div>
        <div className='round__center'>{body}</div>
      </div>
      <div className='round__buttons'>
        <WrapperCenter>
          {
            <>
              <StopWatchButton text={'Start'} />
              <StopWatchButton text={'Resume'} />
              <StopWatchButton text={'Pause'} />
            </>
          }
        </WrapperCenter>
      </div>
    </Wrapper>
  );
};

export default Round;
