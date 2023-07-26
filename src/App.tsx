import { useState } from 'react'

import { TextField } from './components/ui'

export function App() {
  const [valueInput, setValueInput] = useState('')

  console.log(valueInput, 'valueInput')
  const handlerSendInputValue = (valueInput: string) => {
    alert(valueInput)
  }

  return (
    <div>
      <div style={{ padding: '1rem' }}>
        <div>
          <TextField
            handlerOnChange={handlerSendInputValue}
            valueInput={valueInput}
            setValueInput={setValueInput}
            placeholder={'Input'}
            label={'Input'}
            type="email"
          />
        </div>
        <div>
          <TextField
            handlerOnChange={handlerSendInputValue}
            valueInput={valueInput}
            setValueInput={setValueInput}
            placeholder={'Input'}
            label={'Input'}
            type="password"
          />
        </div>
        <div>
          <TextField
            handlerOnChange={handlerSendInputValue}
            valueInput={valueInput}
            setValueInput={setValueInput}
            placeholder={'Input search'}
            type="text"
          />
        </div>
      </div>
    </div>
  )
}
/*
export function App() {
  return (
    <div>
      <div>55555</div>
      <div>2222</div>
      <div>Hello</div>
    </div>
  )
}*/
