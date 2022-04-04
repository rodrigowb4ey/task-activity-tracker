<template>
  <main class="columns is-gapless is-multiline">
    <div class="column is-one-fifth">
      <SideBar />
    </div>
    <div class="column is-four-fifth">
      <TaskForm @whenSavingTask="saveTask" />
      <div class="lista">
        <NewTask v-for="(task, index) in taskList" :key="index" :task="task"/>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SideBar from "./components/SideBar.vue"
import TaskForm from "./components/TaskForm.vue"
import NewTask from "./components/NewTask.vue"
import TaskInterface from "./interfaces/TaskInterface"

export default defineComponent({
  name: 'App',
  data () {
    return {
      taskList: [] as TaskInterface[]
    }
  },
  components: {
    SideBar,
    TaskForm,
    NewTask,
  },
  methods: {
    saveTask(task: TaskInterface) {
      this.taskList.push(task);
    }
  }
});
</script>

<style>
.lista {
  padding: 1.25rem;
}

</style>
