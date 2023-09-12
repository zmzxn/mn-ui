<template>
  <button
    class="mn-button"
    :disabled="disabled"
    :class="[
      `mn-button-${type}`,
      {
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle,
        'is-disabled': disabled,
      },
    ]"
    @click="handleClickBtn"
  >
    <span><slot></slot></span>
  </button>
</template>

<script setup>
defineOptions({
  name: "MnButton",
});

import { defineProps, defineEmits } from "vue";

const props = defineProps({
  type: {
    type: String,
    default: "default",
  },
  plain: {
    type: Boolean,
    default: false,
  },
  round: {
    type: Boolean,
    default: false,
  },
  circle: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

const emits = defineEmits(['click'])
const handleClickBtn = (e) => {
    emits('click', e)
}
</script>

<style lang="scss" scoped>
.mn-button {
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;

  &.is-plain:hover,
  &.is-plain:focus {
    background: #fff;
    border-color: #409eff;
    color: #409eff;
  }

  &.is-round {
    border-radius: 20px;
    padding: 12px 23px;
  }

  &.is-circle {
    border-radius: 50%;
    padding: 12px;
  }

  &.is-disabled {
    background: #999;
    border-color: #999;
    color: #666;
  }
}

.mn-button-default {
  border-color: #666;
  background-color: #666;
  color: #333;
}

.mn-button-primary {
  border-color: #409eff;
  background-color: #409eff;
  color: #fff;
}

.mn-button-error {
  border-color: red;
  background-color: red;
  color: #fff;
}

.mn-button-success {
  border-color: green;
  background-color: green;
  color: #fff;
}
</style>
