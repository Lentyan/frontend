import { bindActionCreators } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { formActions } from '@/redux/form/formSlice';

const allActions = {
  ...formActions,
};
export function useActions() {
  const dispatch = useDispatch();

  return bindActionCreators(allActions, dispatch);
}