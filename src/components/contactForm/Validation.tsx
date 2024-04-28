import * as Yup from "yup"

export const validationSchema = 
  Yup.object({
    subject: 
      Yup.string()
        .min(2, "Minimální délka pro pole jsou 2 znaky!")
        .max(30, "Maximální délka pro pole je 30 znaků!"),
    email:
      Yup.string()
        .matches(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, "Neplatný email!"),
    message:
      Yup.string()
      .min(15, "Minimální délka pro pole je 15 znaků!") 
})