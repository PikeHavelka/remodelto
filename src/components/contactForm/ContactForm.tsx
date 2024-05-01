import { Formik, Form, Field, ErrorMessage } from "formik"
import { useState } from "react"
import axios from "axios"
import { validationSchema } from "./Validation"
import { SuccessModal } from "./modalWindow/SuccessModal"
import { UnsuccessModal } from "./modalWindow/UnsuccessModal"
import "./contactForm.scss"

export const ContactForm = () => {
  const [showSucces, setShowSuccess] = useState(false)
  const [showUnsuccess, setShowUnsuccess] = useState(false)

  const handleModal = (e: React.MouseEvent<HTMLButtonElement>) => {
    if(e.currentTarget.className === "modal-btn-unsuccess") {
      setShowUnsuccess(false)
    } else setShowSuccess(false)
  }

  return (
    <Formik
      initialValues={{
        subject: "",
        email: "",
        message: ""
      }}

      validationSchema={validationSchema}

      onSubmit={(values, { resetForm }) => {
        setTimeout(() => {
          axios.post("http://localhost:5000", values)
          .then(response => {
            setShowSuccess(true)
            // console.log(response)
          })
          .catch(err => {
            setShowUnsuccess(true)
            // console.log(err)
          })
    
          resetForm()
        }, 400)
      }}
    >
      <section className="contact-form-section">

      {showSucces ? <SuccessModal handleModal={handleModal} /> : null}
      {showUnsuccess ? <UnsuccessModal handleModal={handleModal} /> : null}

        <Form className="contact-form container">
          <div className="contact-form-field-container">
            <label htmlFor="subject">Předmět zprávy</label>
            <Field
              className="subject-field form-fields"
              id="subject"
              name="subject"
              type="text"
              placeholder="Rekonstrukce koupelny"
              required>
            </Field>

            <ErrorMessage
              className="form-error-message"
              component="span"
              name="subject"
            />
          </div>

          <div className="contact-form-field-container">
            <label htmlFor="email">Emailová adresa</label>
            <Field
              className="email-field form-fields"
              id="email"
              name="email"
              type="text"
              placeholder="vase.schranka@email.cz"
              required>
            </Field>

            <ErrorMessage
              className="form-error-message"
              component="span"
              name="email"
            />
          </div>

          <div className="contact-form-field-container">
            <label htmlFor="message">Zpráva pro příjemce</label>
            <Field
              className="message-field form-fields"
              id="message"
              name="message"
              type="text"
              as="textarea"
              placeholder={"Dobrý den,\n \nrád bych si od Vaší firmy nechal plně zrekonstruovat interiér koupelny.\n \nPetr Novák"}
              required>
            </Field>

            <ErrorMessage
              className="form-error-message"
              component="span"
              name="message"
            />
          </div>

          <button className="contact-form-btn" type="submit">Odeslat</button>
        </Form>
      </section>
    </Formik>
  )
}
