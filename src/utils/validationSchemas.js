import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Geçerli bir e-posta girin")
    .required("E-posta zorunludur"),
  password: yup
    .string()
    .min(6, "Şifre en az 6 karakter olmalıdır")
    .required("Şifre zorunludur"),
});

export const registerSchema = yup.object().shape({
  name: yup.string().required("İsim zorunludur"),
  email: yup
    .string()
    .email("Geçerli bir e-posta girin")
    .required("E-posta zorunludur"),
  password: yup
    .string()
    .min(6, "Şifre en az 6 karakter olmalıdır")
    .required("Şifre zorunludur"),
});

export const profileSchema = yup.object().shape({
  name: yup.string().required("İsim zorunludur"),
  email: yup
    .string()
    .email("Geçerli bir e-posta girin")
    .required("E-posta zorunludur"),
  profilePicture: yup.mixed().required("Profil resmi zorunludur"),
});

export const postScheduleSchema = yup.object().shape({
  content: yup.string().required("İçerik zorunludur"),
  media: yup.mixed().test("required", "Medya zorunludur", (value) => {
    return value && value.length > 0;
  }),
  scheduleDate: yup
    .date()
    .nullable()
    .transform((curr, orig) => (orig === "" ? null : curr))
    .required("Planlama tarihi zorunludur"),
});
