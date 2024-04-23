import "./formField.scss"
import { FormFieldProps } from "../../types/allTypes"
import { useState } from "react"

export const FormField = (props: FormFieldProps) => {
  const [focus, setFocus] = useState(false)

  const handleFocus = () => {
    
  }

  return (
    <div className="form-field">
      <label htmlFor={props.label.htmlFor}>{props.label.labelText}</label>
      <div className="input-field-container">
        {props.input ?
          <input
            className="input-field"
            type={props.input?.type}
            name={props.input?.name}
            id={props.input?.id}
            placeholder={props.input?.placeholder}
            required
            pattern={props.input.pattern}
            aria-required={props.input?.ariaRequired}

            onBlur={handleFocus}
            onChange={props.onChange}
            value={props.value}
          />
          :
          <textarea
            className="textarea-field"
            name={props.textArea?.name}
            id={props.textArea?.id}
            placeholder={props.textArea?.placeholder}
            required
            aria-required={props.textArea?.ariaRequired}

            onChange={props.onChange}
            value={props.value}
            >
          </textarea>
        }
        <span className="form-error-message">{props.span.errorMessage}</span>
      </div>
    </div>
  )
}