import { ComponentProps, FC, ReactElement, ReactNode } from 'react'

import { clsx } from 'clsx'

import s from './header.module.scss'

export type HeaderProps = {
  children: ReactNode
} & Omit<ComponentProps<'header'>, 'children'>

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
