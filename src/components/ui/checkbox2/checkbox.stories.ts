import { StoryObj } from '@storybook/react'

import { Checkbox } from './'

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Uncontrolled: Story = {
  args: {
    label: 'Click',
    disabled: false,
  },
}
