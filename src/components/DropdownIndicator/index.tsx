import { components } from 'react-select';
import { FC } from 'react';
import DropdownIcon from '../../images/dropdown_icon.svg';

const DropdownIndicator: FC<any> = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <img
        src={DropdownIcon}
        alt="Dropdown Indicator"
        style={{
          transform: props.selectProps.menuIsOpen ? 'rotate(180deg)' : 'none',
          marginRight: '8px',
        }}
      />
    </components.DropdownIndicator>
  );
};

export default DropdownIndicator;
