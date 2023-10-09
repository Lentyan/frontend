import { components, GroupBase, MultiValueProps } from 'react-select';
import MoreSelectedBadge from './MoreSelectedBadge';

import { OptionType } from '@/types/SelectOption';


export function MultiValue(props: MultiValueProps<OptionType, true, GroupBase<OptionType>>) {
  const { getValue, index } = props;
  const maxToShow = 1;
  const overflow = getValue()
    .slice(maxToShow)
    .map((x) => x.label);

  return index < maxToShow ? (
    <components.MultiValue {...props} />
  ) : index === maxToShow ? (
    <MoreSelectedBadge items={overflow} />
  ) : null;
}
