import "./form.scss"
import { FormField } from "../../components"
import dataFormField from "../../data/dataFormField"

export const Form = () => {
  return (
    <section className="form">
      <form action="">
        <FormField {...dataFormField.firstName}/>
        <FormField {...dataFormField.lastName}/>
        <FormField {...dataFormField.phoneNumber}/>
        <FormField {...dataFormField.email}/>
        <FormField {...dataFormField.message}/>

        <input type="submit" />
      </form>
    </section>
  )
}
