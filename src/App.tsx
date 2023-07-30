import { useState } from 'react'

import { Checkbox, Typography } from './components/ui'

export function App() {
  const [value, setValue] = useState<boolean>(false)
  const onChangeHandlerCheckbox = (value: boolean) => {
    setValue(value)
  }

  return (
    <div>
      Hello
      <Typography variant={'body2'}>Lorem ipsum dolor sit amet.</Typography>
      <Checkbox
        onChangeChecked={onChangeHandlerCheckbox}
        checked={value}
        disabled={false}
        label={'dsadasdsadsa'}
        className={'test'}
      ></Checkbox>
    </div>
  )
}
