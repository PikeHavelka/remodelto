import { FormField } from "../types/allTypes"

const emailRegx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const dataFormField: {[key: string]: FormField } = {
  subject: {
    label: {
      htmlFor: "subject",
      labelText: "Předmět"
    },

    input: {
      type: "text",
      name: "subject",
      id: "subject",
      placeholder: "Rekonstrukce koupelny",
      pattern: "^[A-Za-z]{2,30}$",
      ariaRequired: true
    },
    
    span: {
      errorMessage: "Předmět musí obsahovat rozmezí 2-20 znaků."
    },
  },

  email: {
    label: {
      htmlFor: "email",
      labelText: "Email"
    },

    input: {
      type: "email",
      name: "email",
      id: "email",
      placeholder: "vas.email@email.cz",
      pattern: emailRegx,
      ariaRequired: true
    },
    
    span: {
      errorMessage: "Neplatný email."
    },
  },

  message: {
    label: {
      htmlFor: "message",
      labelText: "Zpráva pro příjemce"
    },

    textArea: {
      type: "",
      name: "message",
      id: "message",
      placeholder: "Dobrý den, \n \nprohlédl jsem si Vaši práci a rád bych si od Vaší firmy nechal plně zrekonstruovat koupelnu. Zasílám své telefonní číslo pro případnou domluvu. Předem děkuji za odpověď. \n \ntel: 55 555 55 09 \n \nS pozdravem \nPetr Novák",
      pattern: "",
      ariaRequired: true
    },
    
    span: {
      errorMessage: "Zpráva pro příjemce musí obsahovat alespoň 20 znaků."
    },
  }
}

export default dataFormField