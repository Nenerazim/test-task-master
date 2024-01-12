<script setup lang="ts">
  import {Tickets} from "~/lib/services/tickets";
  import type {SingleUser} from "~/lib/types/user";
  import DashboardHead from "~/components/DashboardHead.vue";

  const service = new Tickets();
  const tickets = await service.findByUser(useState<SingleUser | null>('user').value?.id);
</script>

<template>
  <div class="content">
    <DashboardHead />
    <UiTable :data="tickets" :columns="Tickets.columns" label="Список тикетов"/>
  </div>
</template>