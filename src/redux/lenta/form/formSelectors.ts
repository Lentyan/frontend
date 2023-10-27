import { TypeRootState } from '@/redux/store';
import { FieldKey } from '@/redux/lenta/form/formSlice';

export const selectFieldValues = (state: TypeRootState, field: FieldKey) => {
  return state.searchForm.fields[field].values;
};

export const selectFieldSelected = (state: TypeRootState, field: FieldKey) => {
  return state.searchForm.fields[field].selected;
};

export const selectFieldIsEnabled = (state: TypeRootState, field: FieldKey) => {
  return state.searchForm.fields[field].isEnabled;
};
