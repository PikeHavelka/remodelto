import { FormField } from "../types/allTypes"

const dataFormField: {[key: string]: FormField } = {
  firstName: {
    label: {
      htmlFor: "firstName",
      labelText: "Křestní jméno"
    },

    input: {
      type: "firstName",
      name: "firstName",
      id: "firstName",
      placeholder: "Petr",
      ariaRequired: true
    }
  },

  lastName: {
    label: {
      htmlFor: "lastName",
      labelText: "Příjmení"
    },

    input: {
      type: "lastName",
      name: "lastName",
      id: "lastName",
      placeholder: "Novák",
      ariaRequired: true
    }
  },

  phoneNumber: {
    label: {
      htmlFor: "phoneNumber",
      labelText: "Telefonní číslo"
    },

    input: {
      type: "text",
      name: "phoneNumber",
      id: "phoneNumber",
      placeholder: "070 070 000 34",
      ariaRequired: true
    }
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
      placeholder: "petr.nvk@seznam.cz",
      ariaRequired: true
    }
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
      placeholder: "Dobrý den, chci si od Vás nechat udělat koupelnu.",
      ariaRequired: true
    }
  }
}

export default dataFormField