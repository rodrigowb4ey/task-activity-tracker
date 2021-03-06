import ProjectInterface from "@/interfaces/ProjectInterface";
import { InjectionKey } from "vue";
import { createStore, Store, useStore as vuexUseStore } from "vuex";

interface State {
    projects: ProjectInterface[]
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
    state: {
        projects: []
    },
    mutations: {
        'ADD_PROJECT'(state, projectName: string) {
            const project = {
                id: new Date().toISOString(),
                name: projectName 
            } as ProjectInterface;
            state.projects.push(project);
        },
        'EDIT_PROJECT'(state, project: ProjectInterface) {
            const index = state.projects.findIndex(proj => proj.id == project.id);
            state.projects[index] = project;
        }
    }
});

export function useStore() : Store<State> {
    return vuexUseStore(key)
}