import * as yup from 'yup';

const Permit12976ValidationSchema = yup.object({
  docName: yup.string().required('Kohustuslik väli'),
});

export default Permit12976ValidationSchema;
