import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import TasksView from "../views/TasksView.vue"
import ProjectsView from "../views/ProjectsView.vue"
import ProjectsFormView from "../views/projects/ProjectsFormView.vue"

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Tasks',
        component: TasksView
    },
    {
        path: '/projects',
        name: 'Projects',
        component: ProjectsView
    },
    {
        path: '/projects/new',
        name: 'New Project',
        component: ProjectsFormView
    },
    {
        path: '/projects/:id',
        name: 'Edit Project',
        component: ProjectsFormView,
        props: true
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
});

export default router;