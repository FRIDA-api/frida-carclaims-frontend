import { Container } from '@mui/material';
import React from 'react';
import { CarclaimsDetailsForm } from '../components/Form';

export default function Root() {
  return (
    <Container className="my-5">
      <CarclaimsDetailsForm />
    </Container>
  );
}
