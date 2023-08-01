import { Control, FieldPath, FieldValues, useController } from 'react-hook-form'

import { Checkbox2 } from '../../components/ui'

type PropsType<T extends FieldValues> = {
  control: Control<T>
  name: FieldPath<T>
} & Omit<React.ComponentProps<typeof Checkbox2>, 'onChange' | 'value'>

export const ControlCheckbox2 = <T extends FieldValues>({
  control,
  name,
  ...rest
}: PropsType<T>) => {
  const {
    field: { value: checked, onChange: onChangeChecked },
  } = useController({
    name,
    control,
  })

  return <Checkbox2 checked={checked} onChangeChecked={onChangeChecked} {...rest} />
}
