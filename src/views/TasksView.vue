<template>
  <TaskForm @whenSavingTask="saveTask" />
  <div class="list">
    <NewTask v-for="(task, index) in taskList" :key="index" :task="task" />
    <TaskBox v-if="isListEmpty">
      You're not feeling very productive today, are you? :[
    </TaskBox>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TaskForm from "../components/TaskForm.vue";
import TaskBox from "../components/TaskBox.vue";
import NewTask from "../components/NewTask.vue";
import TaskInterface from "../interfaces/TaskInterface";

export default defineComponent({
  name: "App",
  data() {
    return {
      taskList: [] as TaskInterface[],
    };
  },
  computed: {
    isListEmpty(): boolean {
      return this.taskList.length === 0;
    },
  },
  components: {
    TaskForm,
    TaskBox,
    NewTask,
  },
  methods: {
    saveTask(task: TaskInterface) {
      this.taskList.push(task);
    },
  },
});
</script>

<style scoped>
.list {
    padding: 1.25rem;
}
</style>
