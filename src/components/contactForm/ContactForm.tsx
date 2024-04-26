import "./contactForm.scss"
import { Formik, Form, Field, ErrorMessage } from "formik"

export const ContactForm = () => {
  return (
    <Formik
      initialValues={{
        subject: "",
        email: "",
        message: ""
      }}

      onSubmit={(values, {resetForm}) => {
        console.log(values)
        resetForm()
      }}
    >
      <section className="contact-form-section">
        <Form>
          <div className="contact-form-field-container">
            <label htmlFor="subject">Předmět zprávy</label>
            <Field id="subject" name="subject" type="text"></Field>
          </div>

          <div className="contact-form-field-container">
            <label htmlFor="email">Emailová adresa</label>
            <Field id="email" name="email" type="text"></Field>
          </div>

          <div className="contact-form-field-container">
            <label htmlFor="message">Zpráva pro příjemce</label>
            <Field id="message" name="message" type="text" as="textarea"></Field>
          </div>

          <button type="submit">Odeslat</button>
        </Form>
      </section>
    </Formik>
  )
}
