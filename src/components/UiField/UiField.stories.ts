import { Meta, StoryObj } from '@storybook/vue3';
import UiField from './UiField.vue';
import UiInput from '../UiInput/UiInput.vue';
import UiSelect from '../UiSelect/UiSelect.vue';

const meta: Meta<typeof UiField> = {
  title: 'Components/UiField',
  component: UiField,
  argTypes: {
    label: {
      control: 'text',
      description: 'Подпись поля',
    },
  },
  args: {
    label: 'IP-адрес',
  },
};

export default meta;

export const WithInput: StoryObj<typeof UiField> = {
  render: (args) => ({
    components: { UiField, UiInput },
    setup: () => ({ args }),
    template: `
      <UiField v-bind="args">
        <UiInput placeholder="192.168.1.1" />
      </UiField>
    `,
  }),
};

export const WithSelect: StoryObj<typeof UiField> = {
  render: (args) => ({
    components: { UiField, UiSelect },
    setup: () => ({ args }),
    template: `
      <UiField v-bind="args">
        <UiSelect
          :options="['/24', '/25', '/26', '/27', '/28', '/29', '/30']"
          placeholder="Выберите маску"
        />
      </UiField>
    `,
  }),
  args: {
    label: 'Маска подсети',
  },
};