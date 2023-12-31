import './bootstrap';
import { createApp, h } from 'vue';
import { App, plugin } from '@inertiajs/inertia-vue';
import { InertiaProgress } from '@inertiajs/progress';

const el = document.getElementById('app');

createApp({
    render: () => h(App, {
        initialPage: JSON.parse(el.dataset.page),
        resolveComponent: (name) => require(`./Pages/${name}`).default,
    }),
})
    .use(plugin)
    .mount(el);

InertiaProgress.init({ color: '#4B5563' });
