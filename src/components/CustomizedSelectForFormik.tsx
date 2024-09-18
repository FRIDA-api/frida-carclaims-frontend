import React from 'react';
import { Select } from '@mui/material';

export function CustomizedSelectForFormik({ field, form, children }: any) {
  const { name, value, defaultValue } = field;
  const { setFieldValue } = form;

  return (
    <>
      <Select
        variant="standard"
        defaultValue={defaultValue ?? ''}
        name={name}
        value={value}
        onChange={(e) => {
          setFieldValue(name, e.target.value);
        }}
      >
        {children}
      </Select>
    </>
  );
}
