import { Control, FieldPath, FieldValues, useController } from 'react-hook-form'

import { TextField } from '../../components/ui'

type PropsType<T extends FieldValues> = {
  control: Control<T>
  name: FieldPath<T>
} & Omit<React.ComponentProps<typeof TextField>, 'onChange' | 'value'>

export const ControlTextField = <T extends FieldValues>({
  control,
  name,
  ...rest
}: PropsType<T>) => {
  const {
    field: { value, onChange },
    fieldState: { error },
  } = useController({
    name,
    control,
  })

  return <TextField error={error?.message} value={value} onChange={onChange} {...rest} />
}
