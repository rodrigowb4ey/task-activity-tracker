<template>
  <main class="columns is-gapless is-multiline">
    <div class="column is-one-fifth">
      <SideBar />
    </div>
    <div class="column is-four-fifth">
      <TaskForm />
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SideBar from "./components/SideBar.vue"
import TaskForm from "./components/TaskForm.vue"

export default defineComponent({
  name: 'App',
  components: {
    SideBar,
    TaskForm
  }
});
</script>

<style>

</style>
