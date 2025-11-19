<template>
  <div :class="$style.field">
    <label v-if="label" :class="$style.label">
      {{ label }}
    </label>
    <div :class="$style.control">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  label?: string;
}>(), {
  label: undefined,
});
</script>

<style module lang="scss">
.field {
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
  max-width: 320px;
}

.label {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--color-text);
  line-height: 1.2;
}

.control {
  position: relative;
  width: 100%;
}
</style>