import { Meta, StoryObj } from '@storybook/vue3';
import UiInput from './UiInput.vue';

const meta: Meta<typeof UiInput> = {
  title: 'Components/UiInput',
  component: UiInput,
  argTypes: {
    modelValue: { control: 'text' },
    placeholder: { control: 'text' },
    isDisabled: { control: 'boolean' },
  },
  args: {
    modelValue: '',
    placeholder: '192.168.0.1',
    isDisabled: false,
  },
};

export default meta;

export const Default: StoryObj = {};

export const WithValue: StoryObj = {
  args: { modelValue: '10.0.0.1' },
};

export const Disabled: StoryObj = {
  args: { isDisabled: true, modelValue: '192.168.1.254' },
};