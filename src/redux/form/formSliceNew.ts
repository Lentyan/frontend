import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { OptionType } from '@/types/SelectOption';

type FieldKey = 'shops' | 'groups' | 'categories' | 'subcategories' | 'sku';

interface FormField {
  values: OptionType[];
  selected: OptionType[];
  isEnabled: boolean;
}

interface FormState {
  fields: Record<FieldKey, FormField>;
}

const fieldKeys: FieldKey[] = ['shops', 'groups', 'categories', 'subcategories', 'sku'];


const initialState: FormState = {
  fields: {
    shops: { values: [], selected: [], isEnabled: true },
    groups: { values: [], selected: [], isEnabled: false },
    categories: { values: [], selected: [], isEnabled: false },
    subcategories: { values: [], selected: [], isEnabled: false },
    sku: { values: [], selected: [], isEnabled: false },
  },
};

const formSlice = createSlice({
  name: 'searchForm',
  initialState,
  reducers: {
    setFieldValue: (state, action: PayloadAction<{ fieldName: FieldKey; value: OptionType[] }>) => {
      const { fieldName, value } = action.payload;
      state.fields[fieldName].value = value;

      // Сброс и деактивация следующих полей
      const currentIndex = fieldKeys.indexOf(fieldName);
      resetAndDisableFields(state, currentIndex + 1);
    },
    setOptions: (state, action: PayloadAction<{ fieldName: FieldKey, options: OptionType[] }>) => {
      const { fieldName, options } = action.payload;
      state.fields[fieldName].options = options;
    },
    setSelectedValues: (state, action: PayloadAction<{ fieldName: FieldKey, selectedValues: OptionType[] }>) => {
      const { fieldName, selectedValues } = action.payload;
      state.fields[fieldName].value = selectedValues;
    },
  },
});

export const { setFieldValue, setOptions, setSelectedValues } = formSlice.actions;

export const selectFieldOptions = (state, fieldName: FieldKey) => state.searchForm.fields[fieldName].options;
export const selectSelectedValues = (state, fieldName: FieldKey) => state.searchForm.fields[fieldName].value;

export default formSlice.reducer;
