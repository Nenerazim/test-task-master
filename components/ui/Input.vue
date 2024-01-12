<script lang="ts" setup>
  import type {PropType} from 'vue';

  type InputType = "text" | "password" | "textarea" | "email" | "search" |
    "tel" | "file" | "number" | "url" | "time" | "date";

  const emit = defineEmits(['update:modelValue', 'input'])
  const props = defineProps({
    modelValue: String,
    label: String,
    type: {
      type: String as PropType<InputType>,
      required: false,
      default: () => 'text'
    },
    disabled: {
      type: Boolean,
      required: false,
      default: () => false
    },
    error: {
      type: String,
      required: false,
      default: () => ''
    }
  });

  const inputRef = ref<HTMLInputElement>();

  const model = computed({
    get() {
      return props.modelValue
    },
    set(newValue) {
      emit('update:modelValue', newValue)
    }
  });

  const toggleType = () => {
    if (inputRef.value) {
      inputRef.value.type = inputRef.value.type === 'password' ? 'text' : 'password';
    }
  };
</script>

<template>
  <div class="form-group">
    <input
      ref="inputRef"
      class="component-input"
      v-model="model"
      placeholder="&nbsp;"
      :type="type"
      v-bind="{disabled}"
      @input="(e) => emit('input', e)"
    />
    <label>{{label}}</label>
    <div class="help-block" v-if="error">{{error}}</div>
    <button class="toggle-password" type="button" v-if="type === 'password'" @click="toggleType">
      <ClientOnly>
        <svg width="20" height="20">
          <use href="~/assets/media/icons-sprite.svg#show-hide-pass"/>
        </svg>
      </ClientOnly>
    </button>
  </div>
</template>

<style lang="scss" scoped>
  @import 'assets/sass/variables';

  .form-group {
    transition: all 0.3s ease-in;
    input.component-input {
      @include font14(400);
      height: 50px;
      width: 100%;
      border-radius: 4px;
      border: 1px solid $light_grey;
      padding: 0 16px;
      outline: none;
      transition: .3s;
      background-color: $input_grey;
      &:focus {
        background-color: $white;
        outline: none;
      }
      &:disabled {
        opacity: .5;
      }
    }
    label {
      @include font16(400);
      font-family: 'Helvetica', sans-serif;
      position: absolute;
      top: 18px;
      left: 16px;
      color: $grey;
      pointer-events: none;
      transition: 0.2s ease all;
      -moz-transition: 0.2s ease all;
      -webkit-transition: 0.2s ease all;
    }
    input:focus ~ label,
    input:not(:placeholder-shown) ~ label {
      @include font12(400);
      top: 2px;
      color: $black;
    }
    .help-block {
      @include font12(400);
      position: absolute;
      pointer-events: none;
      left: 16px;
      bottom: 2px;
      color: $red;
    }
    .toggle-password {
      border: none;
      background: transparent;
      padding: 0;
      cursor: pointer;
      position: absolute;
      top: 15px;
      right: 16px;
    }
  }
</style>