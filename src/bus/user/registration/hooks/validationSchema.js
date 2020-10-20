import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  fname: Yup.string(),
  lname: Yup.string(),
  email: Yup.string()
    .email("Электропочта неправильная")
    .required("Электропочта является обязательной"),
  password: Yup.string()
    .min(6, "Пароль слишком короткий")
    .required("Пароль является обязательным"),
  sex: Yup.string().required("Пол является обязательным"),
  age: Yup.number(),
  height: Yup.number(),
  weight: Yup.number().required("Вес является обязательным"),
});