import { action } from '@storybook/addon-actions'
import { Meta, StoryObj } from '@storybook/react'

import { AvatarDemo } from '../avatar'
import { Button } from '../button'

import { Header } from './header.tsx'

const meta = {
  title: 'Components/Header',
  component: Header,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Header>

export default meta

type Story = StoryObj<typeof meta>

export const WithAvatar: Story = {
  args: {
    children: AvatarDemo(),
  },
}

const button = () => {
  return (
    <Button variant={'primary'} style={{ marginLeft: 1500 }}>
      Sign in
    </Button>
  )
}

export const WithButton: Story = {
  args: {
    children: button(),
  },
}
