import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required("Электропочта является обязательной"),
  password: Yup.string()
    .required("Пароль является обязательным"),
});