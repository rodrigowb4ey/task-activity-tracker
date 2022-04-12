<template>
  <div class="box form">
    <div class="columns">
      <div
        class="column is-6"
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
      <div class="column is-3">
        <div class="select">
          <select v-model="projectId">
            <option value="">Select Project</option>
            <option 
              v-for="project in projects"
              :value="project.id"
              :key="project.id"
            >
              {{ project.name }}
            </option>
          </select>
        </div>
      </div>
      <div class="column">
        <TaskTimer @toFinishedTimer="finishTask" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import TaskTimer from "./TaskTimer.vue";
import { useStore } from "vuex";
import { key } from "@/store";

export default defineComponent({
  name: "TaskForm",
  emits: ["whenSavingTask"],
  components: {
    TaskTimer,
  },
  data() {
    return {
      description: "",
      projectId: ""
    };
  },
  methods: {
    finishTask(elapsedTime: number): void {
      this.$emit("whenSavingTask", {
        durationInSeconds: elapsedTime,
        description: this.description,
        project: this.projects.find(proj => proj.id == this.projectId)
      });
      this.description = "";
    },
  },
  setup() {
    const store = useStore(key);
    return {
      projects: computed(() => store.state.projects),
    };
  },
});
</script>

<style>
.form {
  color: var(--primary-text);
  background-color: var(--primary-bg);
}
</style>