import { createRouter, createWebHistory } from "vue-router";
import Index from "@/views/index.vue";
import Button from "@/views/Button.vue";
import Typography from "@/views/Typography.vue";
import Checkbox from "@/views/Checkbox.vue";
import Radio from "@/views/Radio.vue";
import Progress from "@/views/Progress.vue";
import Input from "@/views/Input.vue";
import Tab from "@/views/Tab.vue";
import Table from "@/views/Table.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [{
        path: '/',
        name: 'Index',
        component: Index
    },
    {
        path: '/button',
        name: 'Button',
        component: Button
    },
    {
        path: '/typography',
        name: 'Typography',
        component: Typography
    },
    {
        path: '/checkbox',
        name: 'Checkbox',
        component: Checkbox
    },
    {
        path: '/radio',
        name: 'Radio',
        component: Radio
    },
    {
        path: '/progress',
        name: 'Progress',
        component: Progress
    },
    {
        path: '/input',
        name: 'Input',
        component: Input
    },
    {
        path: '/tab',
        name: 'Tab',
        component: Tab
    },
    {
        path: '/table',
        name: 'Table',
        component: Table
    }

    ]
})

export default router;