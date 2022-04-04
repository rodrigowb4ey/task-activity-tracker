<template>
  <div class="box">
    <div class="columns">
      <div
        class="column is-8"
        role="form"
        aria-label="Form to create a new task"
      >
        <input
          type="text"
          class="input"
          placeholder="Which task do you wish to start?"
          v-model="description"
        />
      </div>
      <div class="column">
        <TaskTimer 
          @toFinishedTimer="finishTask"
        />        
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TaskTimer from './TaskTimer.vue'

export default defineComponent({
  name: "TaskForm",
  components: {
    TaskTimer
  },
  data () {
    return {
      description: ''
    }
  },
  methods: {
    finishTask(elapsedTime: number) : void {
      console.log(elapsedTime);
      console.log(this.description);
      this.description = '';
    }
  }
});
</script>