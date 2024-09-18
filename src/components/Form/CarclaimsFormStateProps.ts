import React from 'react';
import { FormState } from '../../types';

export interface CarclaimsFormStateProps {
  values: FormState;
  handleChange: {
    (e: React.ChangeEvent<any>): void;
    <T = string | React.ChangeEvent<any>>(
      field: T
    ): T extends React.ChangeEvent<any>
      ? void
      : (e: string | React.ChangeEvent<any>) => void;
  };
  setValues: (
    values: React.SetStateAction<FormState>,
    shouldValidate?: boolean
  ) => void;
}
