import ProjectInterface from "@/interfaces/ProjectInterface";
import { InjectionKey } from "vue";
import { createStore, Store } from "vuex";

interface State {
    projects: ProjectInterface[]
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
    state: {
        projects: [
            {
                id: new Date().toISOString(),
                name: 'TypeScript'
            },
            {
                id: new Date().toISOString(),
                name: 'Vue'
            },
            {
                id: new Date().toISOString(),
                name: 'Vuex'
            }
        ]
    }
});