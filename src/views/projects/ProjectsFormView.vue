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
  </section>
</template>

<script lang="ts">
import { useStore } from "@/store";
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProjectsFormView",
  props: {
    id: {
      type: String
    }
  },
  mounted () {
    if (this.id) {
      const project = this.store.state.projects.find(proj => proj.id == this.id);
      this.projectName = project?.name || '';
    }
  },
  data() {
    return {
      projectName: "",
    };
  },
  methods: {
    saveProject() {
      if (this.id) {
        this.store.commit('EDIT_PROJECT', {
          id: this.id,
          name: this.projectName
        })
      } else {
        //CREATE
        this.store.commit('ADD_PROJECT', this.projectName);
      }
      
      this.projectName = "";
      this.$router.push("/projects");
    },
  },
  setup () {
    const store = useStore()
    return {
      store
    }
  }
});
</script>

<style scoped>
.projects {
  padding: 1.25rem;
}
</style>