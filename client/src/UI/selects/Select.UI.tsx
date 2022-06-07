import { Wrapper } from './Select.UI.styles';
import { SelectUIProps } from './Select.UI.types';

const SelectUI: React.FC<SelectUIProps> = ({ options, type, onChange, value }) => {
  const insertOptions = () => {
    return options.map((o, index) => <option key={index}>{o}</option>);
  };

  return (
    <Wrapper data-type={type} onChange={onChange} value={value}>
      {insertOptions()}
    </Wrapper>
  );
};

export default SelectUI;
