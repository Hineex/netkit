import { Meta, StoryObj } from '@storybook/vue3';
import UiSelect from './UiSelect.vue';

const meta: Meta<typeof UiSelect> = {
  title: 'Components/UiSelect',
  component: UiSelect,
  argTypes: {
    modelValue: { control: 'text' },
    isDisabled: { control: 'boolean' },
    options: { control: 'object' },
    variant: {
      control: 'inline-radio',
      options: ['default', 'outlined'],
    },
  },
  args: {
    modelValue: '',
    isDisabled: false,
    options: ['1', '2', '3'],
    variant: 'default',
  },
};

export default meta;

export const Default: StoryObj<typeof UiSelect> = {};


export const Disabled: StoryObj<typeof UiSelect> = {
  args: { isDisabled: true, modelValue: '2' },
};

export const Outlined: StoryObj<typeof UiSelect> = {
  args: { variant: 'outlined' },
};