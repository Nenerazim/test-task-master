<script setup lang="ts">
  import {User} from "~/lib/services/user";

  const route = useRoute();
  const user = await (new User()).findById(Number(route.params.id));
</script>

<template>
  <div class="content">
    {{user}}
    hello
  </div>
</template>
