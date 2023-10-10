import { bindActionCreators } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { searchFormActions } from '@/redux/form/formSlice';

const allActions = {
  ...searchFormActions,
};
export function useActions() {
  const dispatch = useDispatch();

  return bindActionCreators(allActions, dispatch);
}