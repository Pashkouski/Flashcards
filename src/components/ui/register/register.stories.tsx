import { Meta, StoryObj } from '@storybook/react'

import { Register } from 'components/ui/register/register.tsx'

const meta = {
  title: 'Components/Register',
  component: Register,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Register>

export default meta
type Story = StoryObj<typeof meta>

export const SingIn: Story = {}
