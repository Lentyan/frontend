import { CSSObject } from '@emotion/react';
import { ControlProps } from 'react-select';
import { OptionType } from './index';

export const customStyles = {
  multiValue: (provided: CSSObject) => ({
    ...provided,
    margin: '0',
    padding: '0',
    backgroundColor: 'unset',
  }),
  multiValueRemove: (provided: CSSObject) => ({
    ...provided,
    display: 'none',
  }),
  multiValueGeneric: (provided: CSSObject) => ({
    ...provided,
    margin: '0',
    padding: '0',
  }),
  control: (provided: CSSObject, state: ControlProps<OptionType, boolean>) => ({
    ...provided,
    width: '240px',
    fontSize: '20px',
    borderRadius: '10px',
    cursor: 'pointer',
    // backgroundColor: 'blue',
    padding: '0',
    ...(state.isFocused && {
      border: '1px solid #a1a1a1',
    }),
    ...(state.isDisabled && {
      border: '1px solid #f6f6f6',
    }),
    boxShadow: 'none',
    '&:hover': {
      border: '1px solid #a1a1a1',
    },
  }),
  valueContainer: (provided: CSSObject) => ({
    ...provided,
    display: 'flex',
    flexWrap: 'nowrap' as 'nowrap',
    padding: '8px 0 7px 6px',
  }),
  indicatorSeparator: (provided: CSSObject) => ({
    ...provided,
    display: 'none',
  }),
  placeholder: (provided: CSSObject) => ({
    ...provided,
    position: 'absolute' as 'absolute',
    zIndex: 0,
    margin: '0 0 0 9px',
    padding: '0',
    // backgroundColor: 'green',
  }),
  input: (provided: CSSObject) => ({
    ...provided,
    fontSize: '20px',
    height: '31px',
    cursor: 'text',
    zIndex: 1,
    padding: '0 0 0 9px',

  }),
  indicatorContainer: (provided: CSSObject) => ({
    ...provided,
    padding: '0 56px 0 0',
    display: 'none',
  }),
  menu: (provided: CSSObject) => ({
    ...provided,
    padding: '16px 4px 16px 0',
    borderRadius: '8px',
    border: 'none',
    overflow: 'hidden',
    boxShadow: '0px 4px 20px 0px #00000014',
    display: 'flex',
    flexDirection: 'column' as 'column',
    justifyContent: 'space-between',
  }),
  menuList: (provided: CSSObject) => ({
    ...provided,
    border: 'none',
    padding: '0',
    overflowX: 'hidden' as 'hidden',
    overflowY: 'scroll' as 'scroll',
    scrollbarWidth: 'thin' as 'thin',
    scrollbarColor: 'red #f6f6f6',
    // для веб-китов (Chrome, Edge, Safari):
    '&::-webkit-scrollbar': {
      width: '6px',
    },
    '&::-webkit-scrollbar-track': {
      background: '#f6f6f6',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: '#a1a1a1',
      borderRadius: '20px',
      border: '3px solid #a1a1a1',
    },
  }),
  option: (provided: CSSObject) => ({
    ...provided,
    // flexWrap: 'nowrap',
    padding: '0',
    backgroundColor: 'unset',
    color: 'inherit',
  }),
  clearIndicator: (provided: CSSObject) => ({
    ...provided,
    display: 'none',
  }),

};
