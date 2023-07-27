import { FC } from 'react'

import * as CheckboxRadix from '@radix-ui/react-checkbox'
import { CheckIcon } from '@radix-ui/react-icons'
import * as Label from '@radix-ui/react-label'

import { Typography } from '../typography'

import s from './checkbox.module.scss'

type CheckboxProps = {
  value?: boolean
  onChange?: (value: boolean) => void
  disabled?: boolean
  label?: string
  id?: string
  className?: string
  required?: boolean
}

export const Checkbox: FC<CheckboxProps> = ({
  value,
  onChange,
  disabled,
  label,
  id,
  className,
  required,
}) => {
  const classNames = {
    container: `${s.container} ${className}`,
    label: `${s.label} ${disabled && s.disabled}`,
    buttonWrapper: `${s.buttonWrapper} ${disabled && s.disabled}`,
    root: s.CheckboxRoot,
    indicator: s.indicator,
    checkboxRoot: `${s.CheckboxRoot} ${disabled && s.disabled}`,
  }

  return (
    <form>
      <div className={classNames.container}>
        <Label.Root asChild>
          <Typography variant="body2" className={classNames.label} as={'label'}>
            <CheckboxRadix.Root
              className={classNames.checkboxRoot}
              defaultChecked
              checked={value}
              onCheckedChange={onChange}
              disabled={disabled}
              required={required}
              id={id}
            >
              <CheckboxRadix.Indicator className="CheckboxIndicator">
                <CheckIcon className={classNames.label} />
              </CheckboxRadix.Indicator>
            </CheckboxRadix.Root>
            {label}
          </Typography>
        </Label.Root>
      </div>
    </form>
  )
}
