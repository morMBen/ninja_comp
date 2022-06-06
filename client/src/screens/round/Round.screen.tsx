import { Wrapper } from './Round.screen.styles';
type Props = {
  header?: JSX.Element;
  body?: JSX.Element;
  footer?: JSX.Element;
};

const Round: React.FC<Props> = ({ header, body, footer }) => {
  return (
    <Wrapper>
      <div className='round-body'>
        <div className='round-header'>{header}</div>
        <div className='round-center'>{body}</div>
      </div>
      <div className='round-buttons'>{footer}</div>
    </Wrapper>
  );
};

export default Round;
