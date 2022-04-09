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
import { defineComponent } from "vue";
import ProjectInterface from "../interfaces/ProjectInterface";

export default defineComponent({
  name: "ProjectsView",
  data() {
    return {
      projectName: "",
      projects: [] as ProjectInterface[],
    };
  },
  methods: {
    saveProject() {
      const project: ProjectInterface = {
        name: this.projectName,
        id: new Date().toISOString(),
      };
      this.projects.push(project);
      this.projectName = "";
    },
  },
});
</script>

<style scoped>
.projects {
  padding: 1.25rem;
}
</style>