import * as yup from 'yup';

const Application12973ValidationSchema = yup.object({
  docName: yup.string().required('Kohustuslik väli'),
});

export default Application12973ValidationSchema;
