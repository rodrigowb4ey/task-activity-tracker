<template>
  <TaskBox>
    <div class="columns">
      <div class="column is-7">
        {{ task.description || "Task without description" }}
      </div>
      <div class="column">
        <TaskCronometer :timeInSeconds="task.durationInSeconds" />
      </div>
    </div>
  </TaskBox>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import TaskCronometer from "./TaskCronometer.vue";
import TaskInterface from "../interfaces/TaskInterface";
import TaskBox from "./TaskBox.vue";

export default defineComponent({
  name: "NewTask",
  components: {
    TaskCronometer,
    TaskBox,
  },
  props: {
    task: {
      type: Object as PropType<TaskInterface>,
      required: true,
    },
  },
});
</script>

<style scoped>
</style>