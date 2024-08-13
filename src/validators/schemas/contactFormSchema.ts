import * as yup from 'yup';

export interface ContactForm {
  email: string;
  name: string;
  message: string;
}

export const contactFormSchema = yup.object({
  name: yup.string()
    .required('Le nom est obligatoire'),
  email: yup.string()
    .required("L'email est obligatoire")
    .email("L'email n'est pas valide"),
  message: yup.string()
    .required('Le message est obligatoire')
    .min(5, 'Le message doit comporter au moins 5 caractères'),
});
