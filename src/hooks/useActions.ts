import { bindActionCreators } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { searchFormActions } from '@/redux/lenta/form/formSlice';
import { dataSalesActions } from '@/redux/lenta/sales/dataSalesSlice';

const allActions = {
  ...searchFormActions,
  ...dataSalesActions,
};
export function useActions() {
  const dispatch = useDispatch();

  return bindActionCreators(allActions, dispatch);
}