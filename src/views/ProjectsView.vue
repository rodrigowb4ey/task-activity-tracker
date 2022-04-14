<template>
  <section class="projects">
    <h1 class="title">Projects</h1>
    <form @submit.prevent="saveProject">
      <div class="field">
        <label for="project-name" class="label"> Project Name </label>
        <input
          type="text"
          class="input"
          v-model="projectName"
          id="projectName"
        />
      </div>
      <div class="field">
        <button class="button" type="submit">Save</button>
      </div>
    </form>
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>ID</th>
          <th>Project Name</th>
        </tr>
      </thead>
      <tbody>
          <tr v-for="project in projects" :key="project.id">
              <td>{{ project.id }}</td>
              <td>{{ project.name }}</td>
          </tr>
      </tbody>
    </table>
  </section>
</template>

<script lang="ts">
import { useStore } from "@/store";
import { computed, defineComponent } from "vue";

export default defineComponent({
  name: "ProjectsView",
  data() {
    return {
      projectName: "",
    };
  },
  methods: {
    saveProject() {
      this.store.commit('ADD_PROJECT', this.projectName);
      this.projectName = "";
    },
  },
  setup () {
    const store = useStore()
    return {
      store,
      projects: computed(() => store.state.projects)
    }
  }
});
</script>

<style scoped>
.projects {
  padding: 1.25rem;
}
</style>