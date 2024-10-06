import * as Yup from 'yup';
import { InferType } from 'yup';

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Must be a valid email')
    .required('Email is required'),
  password: Yup.string().required('Password is required'),
});

export type LoginSchemaType = InferType<typeof loginSchema>;
