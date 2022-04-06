<template>
  <main class="columns is-gapless is-multiline" :class="{ 'dark-mode': darkModeIsActive }">
    <div class="column is-one-fifth">
      <SideBar @whenChangingTheme="applyThemeChange"/>
    </div>
    <div class="column is-four-fifth content">
      <TaskForm @whenSavingTask="saveTask" />
      <div class="lista">
        <NewTask v-for="(task, index) in taskList" :key="index" :task="task" />
        <TaskBox v-if="isListEmpty">
          You're not feeling very productive today, are you? :[
        </TaskBox>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SideBar from "./components/SideBar.vue";
import TaskForm from "./components/TaskForm.vue";
import TaskBox from "./components/TaskBox.vue";
import NewTask from "./components/NewTask.vue";
import TaskInterface from "./interfaces/TaskInterface";

export default defineComponent({
  name: "App",
  data() {
    return {
      taskList: [] as TaskInterface[],
      darkModeIsActive: false
    };
  },
  computed: {
    isListEmpty () : boolean {
      return this.taskList.length === 0;
    }
  },
  components: {
    SideBar,
    TaskForm,
    TaskBox,
    NewTask,
  },
  methods: {
    saveTask(task: TaskInterface) {
      this.taskList.push(task);
    },
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
.lista {
  padding: 1.25rem;
}
</style>
