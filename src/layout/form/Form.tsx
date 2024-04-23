import "./form.scss"
import { FormField } from "../../components"
import dataFormField from "../../data/dataFormField"
import { useState } from "react"
import axios from "axios"

export const Form = () => {
  const [userData, setUserData] = useState({subject: "", email: "", message: "" })

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    validation()

    console.log(userData)

    axios.post("http://localhost:5000", userData)
      .then(() => alert("odesláno"))
      .catch(console.error)
  }

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setUserData({ ...userData, [e.target.name]: e.target.value })
  }

  const validation = () => {
    const emailRegx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if (userData.subject.length < 2) {
      console.log("Předmět musí obsahovat nejméně 2 znaky.")
    } else if (userData.subject.length > 30) {
      console.log("Předmět nesmí obsahovat více jak 20 znaků")
    }

    if (emailRegx.test(userData.email)) {
      console.log("email prošel")
    } else console.log("email neprošel")

    if (userData.message.length < 20) {
      console.log("Zpráva musí obsahovat aspoň 20 znaků.")
    }
  }

  return (
    <section className="form-section">
      <div className="overlay">

        <form action="" onSubmit={(e) => submitHandler(e)}>
          <div className="input-form-container">
            <FormField
              {...dataFormField.subject}
              onChange={(e) => changeHandler(e)}
              value={userData.subject}
            />

            <FormField
              {...dataFormField.email}
              onChange={(e) => changeHandler(e)}
              value={userData.email}
            />
          </div>

          <FormField
            {...dataFormField.message}
            onChange={(e) => changeHandler(e)}
            value={userData.message}
          />
          
          <input className="form-btn" type="submit" />
        </form>

      </div>
    </section>
  )
}
