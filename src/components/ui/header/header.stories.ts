import { action } from '@storybook/addon-actions'
import { Meta, StoryObj } from '@storybook/react'

import { Header } from './header.tsx'

const meta = {
  title: 'Components/Header',
  component: Header,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Header>

export default meta

type Story = StoryObj<typeof meta>

export const WithButton: Story = {
  args: {
    children: 'div',
  },
}
