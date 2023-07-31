import { Meta, StoryObj } from '@storybook/react'

import { Login } from './login.tsx'

const meta = {
  title: 'Components/Login',
  component: Login,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Login>

export default meta
type Story = StoryObj<typeof meta>

export const SingIn: Story = {}
