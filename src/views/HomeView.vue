<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    <login />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import login from '@/components/login.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'HomeView',
  components: {
    login,
  },
});
</script>
