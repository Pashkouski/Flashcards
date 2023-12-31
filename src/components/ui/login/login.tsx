import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { z } from 'zod'

import { ControlCheckbox2 } from '../../../common/controlCheckbox2/controlCheckbox2.tsx'
import { ControlTextField } from '../../../common/controlTextField/controlTextField.tsx'
import { Button } from '../button'
import { CardComponent } from '../cardComponent'
import { Typography } from '../typography'

import st from './login.module.scss'

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(4),
  rememberMe: z.boolean().default(true),
})

type FormLoginType = z.infer<typeof loginSchema>
export const Login = () => {
  const { handleSubmit, control } = useForm<FormLoginType>({
    resolver: zodResolver(loginSchema),
  })
  const handlerOnSubmit = (data: any) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(handlerOnSubmit)}>
      <DevTool control={control} />
      <CardComponent className={st.common}>
        <Typography className={st.singIn} variant="large">
          Sing In
        </Typography>
        <ControlTextField
          sizeWidthTextField="21.75rem"
          label="email"
          placeholder="Email"
          type="email"
          name="email"
          control={control}
        />
        <ControlTextField
          sizeWidthTextField="21.75rem"
          label="password"
          placeholder="Password"
          type="password"
          name="password"
          control={control}
        />
        <ControlCheckbox2 label="Remember  me" name="rememberMe" control={control} />
        <Typography className={st.forgotPassword} variant="body2">
          <Link to={'/forgotYourPassword'}>Forgot Password?</Link>
        </Typography>
        <Button className={st.button} type={'submit'} fullWidth={true}>
          Sing In
        </Button>
        <Typography className={st.text} variant="body2">
          Don&rsquo;t have an account?
        </Typography>
        <Typography className={st.singUp} variant="subtitle1">
          <Link to={'/register'}>Sing Up</Link>
        </Typography>
      </CardComponent>
    </form>
  )
}
