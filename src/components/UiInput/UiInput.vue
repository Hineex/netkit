<template>
  <input
    :class="$style.input"
    type="text"
    :value="modelValue"
    :placeholder="placeholder"
    :disabled="isDisabled"
    @input="onInput"
  />
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  modelValue?: string;
  placeholder?: string;
  isDisabled?: boolean;
}>(), {
  modelValue: '',
  placeholder: '',
  isDisabled: false,
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
}>();

const onInput = (e: Event) => {
  const target = e.target as HTMLInputElement;
  emit('update:modelValue', target.value);
};
</script>

<style module lang="scss">
.input {
  width: 100%;
  max-width: 320px;
  padding: 8px 12px;
  font-family: inherit;
  font-size: 0.875rem;
  border: 1px solid var(--color-border);
  border-radius: 8px;
  background-color: var(--color-bg-input);
  color: var(--color-text);
  transition: border-color 0.15s ease, background-color 0.15s ease;

  &::placeholder {
    color: var(--color-text-light);
  }

  &:hover:not(:disabled) {
    border-color: var(--color-border-hover);
  }

  &:focus {
    outline: none;
    border-color: var(--color-border-focus);
    box-shadow: 0 0 0 2px var(--color-focus-ring);
  }

  &:disabled {
    background-color: var(--color-bg-disabled);
    cursor: not-allowed;
    opacity: 1; /* важно: не снижать контрастность при disabled */
  }
}
</style>