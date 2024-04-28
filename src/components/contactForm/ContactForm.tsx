import "./contactForm.scss"
import { Formik, Form, Field, ErrorMessage } from "formik"
import { validationSchema } from "./Validation"

export const ContactForm = () => {
  return (
    <Formik
      initialValues={{
        subject: "",
        email: "",
        message: ""
      }}

      validationSchema={validationSchema}

      onSubmit={(values, { resetForm }) => {
        console.log(values)
        resetForm()
      }}
    >
      <section className="contact-form-section">
        <Form className="contact-form container">
          <div className="contact-form-field-container">
            <label htmlFor="subject">Předmět zprávy</label>
            <Field
              className="subject-field form-fields"
              id="subject"
              name="subject"
              type="text"
              placeholder="Rekonstrukce koupelny">
            </Field>
          </div>

          <div className="contact-form-field-container">
            <label htmlFor="email">Emailová adresa</label>
            <Field
              className="email-field form-fields"
              id="email"
              name="email"
              type="text"
              placeholder="vase.schranka@email.cz">
            </Field>
          </div>

          <div className="contact-form-field-container">
            <label htmlFor="message">Zpráva pro příjemce</label>
            <Field
              className="message-field form-fields"
              id="message"
              name="message"
              type="text"
              as="textarea"
              placeholder={"Dobrý den,\n \nrád bych si od Vaší firmy nechal plně zrekonstruovat interiér koupelny.\n \nS pozdravem\n \nPetr Novák"}>
            </Field>
          </div>

          <button className="contact-form-btn" type="submit">Odeslat</button>
        </Form>
      </section>
    </Formik>
  )
}
