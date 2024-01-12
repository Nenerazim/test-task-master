<script setup lang="ts">
  import {Auth} from "~/lib/services/auth";
</script>

<template>
  <div class="dashboard-head">
    <span>Dashboard</span>
    <div class="profile">

    </div>
    <div class="dropdown">
      <ul>
        <li>
          <a href="/profile">Профиль</a>
        </li>
        <li>
          <button @click="(new Auth()).logout()">Выйти</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import 'assets/sass/variables';

  .dashboard-head {
    width: 100%;
    margin-bottom: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    height: 70px;
    background: $light_grey_2;
    border-radius: 4px;
    padding-inline: 20px;
    span {
      @include font20(600);
      color: $black;
    }
    .dropdown {
      position: absolute;
      opacity: 0;
      max-height: 0;
      top: 71px;
      right: 0;
    }
  }
</style>