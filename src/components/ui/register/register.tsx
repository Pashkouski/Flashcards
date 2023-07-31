import { NavLink } from 'react-router-dom'

import { Typography } from '../typography'

export const Register = () => {
  return (
    <div>
      <Typography variant="large">покаместь это вот такая компонента REGISTER</Typography>
      <NavLink to={'/login'}>Нажми сюда и перейдешь на компоненту ЛОГИН</NavLink>
    </div>
  )
}
