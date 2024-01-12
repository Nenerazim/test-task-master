<script setup lang="ts">
  import {Auth} from "~/lib/services/auth";
  import type {LoginRequest} from "~/lib/types/auth";

  const data = ref<LoginRequest>({login: '', password: ''});
  const pending = ref(false);
  const errors = ref<Partial<Record<keyof LoginRequest, string>>>({});

  const submit = async () => {
    pending.value = true;
    await (new Auth()).login(data.value)
      .catch((e: Partial<Record<keyof LoginRequest, string>>) => errors.value = e)
      .finally(() => pending.value = false);
  };
</script>

<template>
  <div class="login-page">
    <UiCard centered>
      <UiLinearLoader v-if="pending"/>
      <h2>Вход в аккаунт</h2>
      <form @submit.prevent="submit">
        <UiInput
          v-model="data.login"
          label="Введите логин..."
          :error="errors.login"
          @input="errors.login = undefined"
        />
        <UiInput
          type="password"
          v-model="data.password"
          label="Введите пароль..."
          :error="errors.password"
          @input="errors.password = undefined"
        />
        <button class="button blue">Войти</button>
      </form>
    </UiCard>
  </div>
</template>

<style lang="scss" scoped>
  @import 'assets/sass/variables';

  .login-page {
    width: 100%;
    display: flex;
    height: 100vh;
    align-items: center;
    justify-content: center;
    p {
      @include font16(400);
      color: $grey;
      margin-bottom: 20px;
    }
    form {
      width: 100%;
    }
    :deep(.loader-line) {
      position: absolute;
      width: 100%;
      top: 0;
      left: 0;
    }
  }
</style>