'use client';

import { useFormikContext } from 'formik';
import type { DetailedHTMLProps, FormHTMLAttributes } from 'react';

export default function FormikConnectedForm(
  props: DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>,
) {
  const { handleReset, handleSubmit } = useFormikContext();

  return <form onReset={handleReset} onSubmit={handleSubmit} noValidate {...props} />;
}
