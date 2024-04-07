import "./formField.scss"
import { FormFieldProps } from "../../types/allTypes"

export const FormField = (props: FormFieldProps) => {
  return (
    <div className="form-field">
      <label htmlFor={props.label.htmlFor}>{props.label.labelText}</label>
      {props.input ?
        <input 
          type={props.input?.type}
          name={props.input?.name}
          id={props.input?.id}
          placeholder={props.input?.placeholder}
          required
          aria-required={props.input?.ariaRequired}
        />
        :
        <textarea
          name={props.textArea?.name}
          id={props.textArea?.id}
          placeholder={props.textArea?.placeholder}
          required
          aria-required={props.textArea?.ariaRequired}
          >
        </textarea>
      }
    </div>
  )
}