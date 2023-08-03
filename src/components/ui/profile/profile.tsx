import iconUser from '../../../../src/assets/icons/iconUser.png'
import { Button } from '../button'
import { CardComponent } from '../cardComponent'
import { Typography } from '../typography'

import st from './profile.module.scss'

export const Profile = () => {
  const handlerOnClick = () => {
    alert(
      'идет запрос на сервер НА ВЫЛОГИНЕВАНИЕ, и после положительного ответа с сервера перекинуть должно на компоненту Login'
    )
  }

  return (
    <CardComponent className={st.card}>
      <Typography variant="large">Personal Information</Typography>
      <div>
        <img className={st.iconUser} src={iconUser} />
        <div>1</div>
      </div>
      <div>
        <Typography variant="body2">name</Typography>
        <div>icon</div>
      </div>
      <Typography variant="body2">mail</Typography>
      <Button onClick={handlerOnClick}>Logout</Button>
    </CardComponent>
  )
}
