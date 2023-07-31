import { useController, useForm } from 'react-hook-form'

import { Button } from '../button'
import { Checkbox2 } from '../checkbox2'
import { TextField } from '../textField'
import { Typography } from '../typography'

export const Login = () => {
  const { handleSubmit, control } = useForm()

  const handlerOnSubmit = (data: any) => {
    console.log(data)
  }
  const {
    field: { value, onChange },
  } = useController({
    name: 'password',
    control,
    defaultValue: '',
  })
  const {
    field: { value: value2, onChange: onChange2 },
  } = useController({
    name: 'email',
    control,
    defaultValue: '',
  })
  const {
    field: { value: checked, onChange: onChangeChecked },
  } = useController({
    name: 'rememberMe',
    control,
    defaultValue: false,
  })

  return (
    <form onSubmit={handleSubmit(handlerOnSubmit)}>
      <Typography variant="large">Sing In</Typography>
      <TextField
        value={value2}
        onChange={onChange2}
        label="email"
        placeholder={'Email'}
        type="email"
      />
      <TextField
        value={value}
        onChange={onChange}
        label="password"
        placeholder={'Password'}
        type="password"
      />
      <Checkbox2 checked={checked} onChangeChecked={onChangeChecked} label="Remember  me" />
      <Typography variant="body2">Forgot Password?</Typography>
      <Button type={'submit'} fullWidth={true}>
        Sing Up
      </Button>
      <Typography variant="body2">Don't have an account?</Typography>
    </form>
  )
}
