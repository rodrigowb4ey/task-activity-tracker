<template>
  <div class="box has-text-weight-bold">
    <div class="columns">
      <div class="column is-7">{{ task.description }}</div>
      <div class="column">
        <TaskCronometer :timeInSeconds="task.durationInSeconds" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import TaskCronometer from "./TaskCronometer.vue";
import TaskInterface from "../interfaces/TaskInterface";

export default defineComponent({
  name: "NewTask",
  components: {
    TaskCronometer,
  },
  props: {
    task: {
      type: Object as PropType<TaskInterface>,
      required: true
    }
  }
});
</script>

<style scoped>
.box {
  background: #FAF0CA;
}
</style>