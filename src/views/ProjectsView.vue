<template>
  <section class="projects">
    <h1 class="title">Projects</h1>
    <router-link to="/projects/new" class="button">
      <span class="icon is-small">
        <i class="fas fa-plus"></i>
      </span>
      <span>New Project</span>
    </router-link>
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>ID</th>
          <th>Project Name</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
          <tr v-for="project in projects" :key="project.id">
              <td>{{ project.id }}</td>
              <td>{{ project.name }}</td>
              <td>
                <router-link :to="`/projects/${project.id}`" class="button">
                  <span class="icon is-small">
                    <i class="fas fa-pencil-alt"></i>
                  </span>
                </router-link>
              </td>
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
  setup () {
    const store = useStore()
    return {
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