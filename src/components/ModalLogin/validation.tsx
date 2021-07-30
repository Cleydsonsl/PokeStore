import * as yup from "yup";

export const validationSchema = yup.object({
    login: yup.string().required("O campo login é obrigatório"),
    password: yup.string().min(8).required("O campo senha é obrigatório")
})