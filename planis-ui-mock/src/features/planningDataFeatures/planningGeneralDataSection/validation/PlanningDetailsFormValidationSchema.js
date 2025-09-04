import * as yup from 'yup';

const PlanningDetailsFormValidationSchema = yup.object({
  planningName: yup.string().required('Kohustuslik väli'),
});

export default PlanningDetailsFormValidationSchema;
