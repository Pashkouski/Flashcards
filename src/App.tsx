import { useState } from 'react'

import { SliderBar, TextField } from './components/ui'

export function App() {
  const [valueInput, setValueInput] = useState('')

  console.log(valueInput, 'valueInput')
  const handlerSendInputValue = (valueInput: string) => {
    alert(valueInput)
  }
  //SIDER
  const startArrayValue = [1, 100]
  const handlerOnValueCommit = (value: number[]) => {
    alert(`Вы поставили левый ползунок на ${value[0]}  а правый на ${value[1]}`)
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
      {/* Slider*/}
      <div style={{ padding: '15 rem' }}>
        <SliderBar onValueCommit={handlerOnValueCommit} startArrayValue={startArrayValue} />
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
