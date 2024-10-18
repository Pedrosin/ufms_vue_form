import { createRouter, createWebHistory } from 'vue-router';
import HelloWorld from '@/components/HelloWorld.vue';
import PaginaCadastro from '@/views/PaginaCadastro.vue';
import ConsultaDados from '@/views/ConsultaDados.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HelloWorld
    },
    {
        path: '/cadastro',
        name: 'Cadastro',
        component: PaginaCadastro
    },
    {
        path: '/consulta',
        name: 'Consulta',
        component: ConsultaDados
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
