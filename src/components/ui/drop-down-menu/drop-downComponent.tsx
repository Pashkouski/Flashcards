import React, { useState } from 'react'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { PersonIcon } from '@radix-ui/react-icons'

import { Logout } from '../../../assets/icons/iconLogOut.tsx'
import { AvatarDemo } from '../avatar'

import s from './drop-downComponent.module.scss'

type DropdownProps = {
  arrItems: Array<string>
}

export const DropdownMenuComponent: React.FC<DropdownProps> = ({ arrItems }) => {
  const [open, setOpen] = useState(false)

  const setState = () => {
    setOpen(!open)
  }

  return (
    <DropdownMenu.Root open={open} onOpenChange={setState}>
      <DropdownMenu.Trigger asChild>
        <button className={s.IconButton} aria-label="Customise options">
          <AvatarDemo />
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content className={s.DropdownMenuContent} sideOffset={3}>
          {arrItems.length <= 2 && (
            <div className={s.DropdownMenuItem}>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <AvatarDemo />
                <div style={{ margin: '10px' }}>
                  <h3>Ivan</h3>
                  <h5>ivan@gmail.com</h5>
                </div>
              </div>
            </div>
          )}
          {arrItems.map(e => {
            return (
              <>
                <DropdownMenu.Separator className={s.DropdownMenuSeparator} />
                <DropdownMenu.Item className={s.DropdownMenuItem}>
                  {e === 'Sign Out' ? (
                    <Logout style={{ margin: '5px' }} />
                  ) : e === 'My Profile' ? (
                    <PersonIcon style={{ margin: '5px' }} />
                  ) : null}
                  {e}
                </DropdownMenu.Item>
              </>
            )
          })}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
