import * as Yup from "yup"

export const validationSchema = 
  Yup.object({
    subject: 
      Yup.string()
        .min(2, "Min. délka pro pole jsou 2 znaky!")
        .max(30, "Max. déla pro pole je 30 znaků!"),
    email:
      Yup.string()
        .email(),
    message:
      Yup.string()
      .min(15, "Min. délka pro pole je 15 znaků!") 
})