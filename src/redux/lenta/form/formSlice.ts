import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { OptionType } from '@/types/SelectOption';

export type FieldKey = 'shops' | 'groups' | 'categories' | 'subcategories' | 'sku';

interface FormField {
  values: OptionType[];
  selected: OptionType[];
  isEnabled: boolean;
}

interface FormState {
  fields: Record<FieldKey, FormField>;
}
const fieldOrder: FieldKey[] = ['shops', 'groups', 'categories', 'subcategories', 'sku'];

// const fieldKeys: FieldKey[] = ['shops', 'groups', 'categories', 'subcategories', 'sku'];


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
    // редюсер для установки выбранных элементов
    setSelected: (state, action: PayloadAction<{ field: FieldKey; selected: OptionType[] }>) => {
      const { field, selected } = action.payload;
      state.fields[field].selected = selected;

      const fieldIndex = fieldOrder.indexOf(field);
      const nextField = fieldIndex + 1;

      if (fieldIndex !== -1) {
        for (let i = nextField; i < fieldOrder.length; i++) {
          state.fields[fieldOrder[i]].selected = [];
          state.fields[fieldOrder[i]].isEnabled = false;
        }
        if (selected.length > 0 && fieldOrder[nextField]) {
          state.fields[fieldOrder[nextField]].isEnabled = true;
        }
      }
    },
    // редюсер для сохранения данных
    setValues: (state, action: PayloadAction<{ field: FieldKey; values: OptionType[] }>) => {
      const { field, values } = action.payload;
      state.fields[field].values = values;
    },
    // редюсер для управления доступностью поля
    setIsEnabled: (state, action: PayloadAction<{ field: FieldKey; isEnabled: boolean }>) => {
      const { field, isEnabled } = action.payload;
      state.fields[field].isEnabled = isEnabled;
    },
  },
});

export const searchFormActions = formSlice.actions;

export default formSlice.reducer;
