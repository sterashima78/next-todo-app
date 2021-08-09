import { ChangeEvent, useState } from "react"

export type TextInputProps = {
  text: string
  onChange: (title: string)=> void
}

const onChangeHandler = (onChange: TextInputProps['onChange']) => (e: ChangeEvent<HTMLInputElement>) => {
  if (!!e.currentTarget.value) onChange(e.currentTarget.value)
}
export const TextInput: React.VFC<TextInputProps> = ({ text, onChange }) => <input value={text} onChange={onChangeHandler(onChange)} />

export type TextFormProps = {
  onSubmit: (title: string)=> void
}

export const TextForm: React.VFC<TextFormProps> = ({ onSubmit }) => {
  const [text, updateText] = useState("")
  return ( <form onSubmit={(e) => {
    e.preventDefault()
    if(text !== "") onSubmit(text)
    updateText("")
  }}>
    <TextInput text={text} onChange={updateText} />
    <button disabled={ text ==="" }>Add</button>
  </form>
  )
}