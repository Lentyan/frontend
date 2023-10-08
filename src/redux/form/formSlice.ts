import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { OptionType } from '@/types/SelectOption';

type FieldKey = 'shops' | 'groups' | 'categories' | 'subcategories' | 'sku';

interface FieldPayload {
  fieldName: FieldKey;
  value: OptionType[];
}
interface FormField {
  value: OptionType[];
  isEnabled: boolean;
}

interface FormState {
  fields: {
    shops: FormField,
    groups: FormField,
    categories: FormField,
    subcategories: FormField,
    sku: FormField,
  }
}

const initialState: FormState = {
  fields: {
    shops: { value: [], isEnabled: true },
    groups: { value: [], isEnabled: false },
    categories: { value: [], isEnabled: false },
    subcategories: { value: [], isEnabled: false },
    sku: { value: [], isEnabled: false },
  },
};

const formSlice = createSlice({
  name: 'searchForm',
  initialState,
  reducers: {
    setFieldValue: (state, action: PayloadAction<FieldPayload>) => {
      const { fieldName, value } = action.payload;
      state.fields[fieldName].value = value;
    },
    setFieldEnabled: (state, action: PayloadAction<{ fieldName: FieldKey; isEnabled: boolean }>) => {
      const { fieldName, isEnabled } = action.payload;
      state.fields[fieldName].isEnabled = isEnabled;
    },
  },
});

export const formActions = formSlice.actions;
export const formReducers = formSlice.reducer;