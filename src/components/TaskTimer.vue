<template>
  <section class="is-flex is-align-items-center is-justify-content-space-between">
    <TaskCronometer :timeInSeconds="timeInSeconds" />
    <TimerButton @clicked="startCount()" icon="fas fa-play" text="Play" :disabled="runningCronometer" />
    <TimerButton @clicked="finishCount()" icon="fas fa-stop" text="Stop" :disabled="!runningCronometer" />    
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TaskCronometer from "./TaskCronometer.vue";
import TimerButton from "./TimerButton.vue";

export default defineComponent({
  name: "TaskTimer",
  emits: ['toFinishedTimer'],
  components: {
    TaskCronometer,
    TimerButton,
  },
  data() {
    return {
      timeInSeconds: 0,
      cronometer: 0,
      runningCronometer: false,
    };
  },
  methods: {
    startCount() {
      // 1s = 1000 ms
      this.runningCronometer = true;
      this.cronometer = setInterval(() => {
        this.timeInSeconds += 1;
      }, 1000);
    },
    finishCount() {
      clearInterval(this.cronometer);
      this.runningCronometer = false;
      this.$emit('toFinishedTimer', this.timeInSeconds);
      this.timeInSeconds = 0;
    },
  },
});
</script>