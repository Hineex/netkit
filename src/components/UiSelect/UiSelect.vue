<template>
  <div :class="$style.select" :data-variant="variant">
    <select
      :class="$style.input"
      :value="modelValue"
      :disabled="isDisabled"
      @change="onInput"
    >
      <option v-for="opt in options" :key="opt" :value="opt">
        {{ opt }}
      </option>
    </select>
    <svg
      v-if="!isDisabled"
      :class="$style.arrow"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
    >
      <path d="M7 10l5 5 5-5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  modelValue?: string;
  isDisabled?: boolean;
  options: string[];
  variant?: 'default' | 'outlined';
}>(), {
  modelValue: '',
  isDisabled: false,
  variant: 'default',
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
}>();

const onInput = (e: Event) => {
  const target = e.target as HTMLSelectElement;
  emit('update:modelValue', target.value);
};
</script>

<style module lang="scss">
.select {
  position: relative;
  display: inline-flex;
  align-items: center;
  width: 100%;
  max-width: 320px;
}

.input {
  width: 100%;
  padding: 8px 32px 8px 12px;
  font-family: inherit;
  font-size: 0.875rem;
  border: 1px solid var(--color-border);
  border-radius: 8px;
  background-color: var(--color-bg-input);
  color: var(--color-text);
  cursor: pointer;
  transition: border-color 0.15s, background-color 0.15s;

  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;

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
  }

}

.arrow {
  position: absolute;
  right: 12px;
  pointer-events: none;
  color: var(--color-text);
  transition: color 0.15s ease;

  .input:disabled + & {
    color: var(--color-text-light);
  }
}
</style>