<template>
  <main class="columns is-gapless is-multiline" :class="{ 'dark-mode': darkModeIsActive }">
    <div class="column is-one-fifth">
      <SideBar @whenChangingTheme="applyThemeChange"/>
    </div>
    <div class="column is-four-fifth content">
      <router-view></router-view>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SideBar from "./components/SideBar.vue";

export default defineComponent({
  name: "App",
  data() {
    return {
      darkModeIsActive: false
    };
  },
  components: {
    SideBar,
  },
  methods: {
    applyThemeChange(darkModeIsActive: boolean) {
      this.darkModeIsActive = darkModeIsActive;
    }
  },
});
</script>

<style>
main {
  --primary-bg: #fff;
  --primary-text: #000;
}
main.dark-mode {
  --primary-bg: #2b2d42;
  --primary-text: #ddd;
}
.content {
  background-color: var(--primary-bg);
}
</style>
