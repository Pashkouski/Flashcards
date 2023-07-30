import { useState } from 'react'

import { itemTabType, SliderBar, TabPanel, TextField } from './components/ui'

export function App() {
  //1
  const [valueInput, setValueInput] = useState('')

  console.log(valueInput, 'valueInput')
  const handlerSendInputValue = (valueInput: string) => {
    alert(valueInput)
  }
  //2
  //SIDER
  const startArrayValue = [1, 100]
  const handlerOnValueCommit = (value: number[]) => {
    alert(`Вы поставили левый ползунок на ${value[0]}  а правый на ${value[1]}`)
  }
  //3
  //TABPANEL

  const [active, setActive] = useState('My')

  const handlerTabPanel1 = (name: string) => {
    alert(`Мне показалось или вы нажали кнопку ${name}...Перепроверьте лучше!`)
    setActive(name)
  }
  const handlerTabPanel2 = (name: string) => {
    alert(`Мне показалось или вы нажали кнопку ${name}...Перепроверьте лучше!`)
    setActive(name)
  }
  const handlerTabPanel3 = (name: string) => {
    alert(`Мне показалось или вы нажали кнопку ${name}...Перепроверьте лучше!`)
    setActive(name)
  }
  const dataTabPanel: itemTabType[] = [
    { id: 'tab1', name: 'My', onClick: handlerTabPanel1, disabled: false },
    { id: 'tab2', name: 'All', onClick: handlerTabPanel2, disabled: false },
    { id: 'tab3', name: 'Трейтья', onClick: handlerTabPanel3, disabled: false },
  ]

  return (
    <div>
      <div>
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
      <div>
        <SliderBar onValueCommit={handlerOnValueCommit} startArrayValue={startArrayValue} />
      </div>
      <div>
        {/* TabPanel*/}
        <TabPanel active={active} data={dataTabPanel} title="Title" />
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
