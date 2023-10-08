import { components } from 'react-select';
import MoreSelectedBadge from './MoreSelectedBadge';

export function MultiValue({ data, index, getValue, ...props }) {
  const maxToShow = 1;
  const overflow = getValue()
    .slice(maxToShow)
    .map((x) => x.label);

  return index < maxToShow ? (
    <components.MultiValue {...props} />
  ) : index === maxToShow ? (
    <MoreSelectedBadge items={overflow}/>
  ) : null;
}
