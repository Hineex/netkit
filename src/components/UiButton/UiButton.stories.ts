import { Meta, StoryObj } from '@storybook/vue3';
import UiButton from './UiButton.vue';
import { html } from '../../helpers';

const meta: Meta<typeof UiButton> = {
  title: 'Components/UiButton',
  component: UiButton,
  argTypes: {
    layout: {
      control: 'inline-radio',
      options: ['primary', 'secondary'],
    },
    type: {
      control: 'inline-radio',
      options: ['button', 'submit'],
    },
    isDisabled: {
      control: 'boolean',
    },
  },
  args: {
    layout: 'primary',
    type: 'button',
    isDisabled: false,
  },
};

export default meta;

export const Primary: StoryObj<typeof UiButton> = {
  render: (args) => ({
    components: { UiButton },
    setup: () => ({ args }),
    template: html`<UiButton v-bind="args">Рассчитать</UiButton>`,
  }),
};

export const Secondary: StoryObj<typeof UiButton> = {
  ...Primary,
  args: { layout: 'secondary' },
};

export const Disabled: StoryObj<typeof UiButton> = {
  ...Primary,
  args: { isDisabled: true },
};