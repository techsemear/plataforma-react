import Image from 'next/image'

import styles from './FormControl.module.css'

const labels = {
  emailInputTitle:"",
  phoneTitle:"",
  textAreaTitle:"",
  checkboxTitle:"",
}

export default function FormControl(props) {
  const emailInput = 'false' 
  const phoneInput = 'false'
  const textArea = 'false'
  const checkBox = 'false'

  if (props.emailInput == 'true'){
    <div>
      <label htmlFor>
        {labels.emailInputTitle}
      </label>
      <input
        type="text"
        name="email"
        placeholder="exemplo: janedoe@email.com"
      />
    </div>
  }

  else if (props.phoneInput == 'true'){
    <div>
      <label htmlFor className="">
        {labels.phoneTitle}
      </label>
      <input 
        defaultValue={fields.phone} 
        type="number" 
        name="phone" 
        placeholder="Qual seu Whatsapp:(examplo: 1198382788)" 
        onchange={handleChange} 
        />
      </div>
  }

  else if (props.textArea == 'true'){
   <div>
     <label htmlFor="">
      {labels.textAreaTitle}
     </label>
     <textarea>
    </textarea>
   </div>
  }

  else if (props.checkBox == 'true'){
   <div>
   <label htmlFor className="">
    {labels.checkboxTitle}
   </label> 
   <input type="checkbox" />
   </div>
  }

  return (
    <fieldset className = {`${emailInput} ${phoneInput} ${textArea} ${checkBox}`}></fieldset>
  )
}
