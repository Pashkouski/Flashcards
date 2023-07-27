import { ComponentProps, FC, ReactNode } from 'react'

import { clsx } from 'clsx'

import s from './header.module.scss'

export type HeaderProps = {
  children: ReactNode
} & ComponentProps<'header'>

export const Header: FC<HeaderProps> = ({ children, className, ...rest }) => {
  const classNames = {
    header: clsx(s.header, className),
  }

  return (
    <header className={classNames.header} {...rest}>
      {children}
    </header>
  )
}
