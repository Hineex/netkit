<template>
  <button
    :class="$style.button"
    :data-layout="layout"
    :disabled="isDisabled"
    :type="type"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  layout?: 'primary' | 'secondary';
  type?: 'submit' | 'button';
  isDisabled?: boolean;
}>(), {
  layout: 'primary',
  type: 'button',
  isDisabled: false,
});
</script>

<style module lang="scss">
.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-height: 36px;
  padding: 8px 16px;
  font-family: inherit;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.2;
  border: 1px solid transparent;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.15s ease;

  /* Primary */
  color: var(--color-text-inverted);
  background-color: var(--color-primary);

  &:hover:not(:disabled) {
    background-color: var(--color-primary-hover);
  }

  &:focus-visible:not(:disabled) {
    outline: 2px solid var(--color-border-focus);
    outline-offset: 2px;
  }

  &:active:not(:disabled) {
    background-color: var(--color-primary-active);
  }

  /* Secondary */
  &[data-layout='secondary'] {
    color: var(--color-text);
    background-color: var(--color-secondary);
    border-color: var(--color-border);

    &:hover:not(:disabled) {
      background-color: var(--color-secondary-hover);
      border-color: var(--color-border-hover);
    }

    &:focus-visible:not(:disabled) {
      outline: 2px solid var(--color-cappuccino-focus);
      outline-offset: 2px;
    }

    &:active:not(:disabled) {
      background-color: var(--color-secondary-active);
    }
  }

  /* Disabled */
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
}
</style>