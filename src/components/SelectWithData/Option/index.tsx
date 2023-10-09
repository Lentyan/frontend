import { components, OptionProps } from 'react-select';
import styles from '@/components/SelectWithData/SelectWithData.module.scss';
import { OptionType } from '@/types/SelectOption';


export default function SelectOption(props: OptionProps<OptionType, boolean>) {
  return (
    <components.Option {...props}>
      <div className={`${styles.optionItem} ${props.isSelected ? styles.isChecked : ''}`}>
        <input
          className={styles.optionItem__checkbox}
          type="checkbox"
          checked={props.isSelected}
          onChange={() => null}
        />
        <span className={styles.optionItem__name}>{props.label}</span>
      </div>
    </components.Option>
  );
}