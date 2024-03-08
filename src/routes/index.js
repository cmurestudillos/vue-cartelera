import { createRouter, createWebHistory } from 'vue-router';
import HomeComponent from '../components/home/Homecomponent.vue';
import BuscarComponent from '../components/buscar/BuscarComponent.vue';
import PeliculaComponent from '../components/pelicula/PeliculaComponent.vue';
import ErrorComponent from '../components/shared/error/ErrorComponent.vue';


const routes = [
    {path: '/', component: HomeComponent},
    {path: '/home', component: HomeComponent},
    {path: '/buscar', component: BuscarComponent},
    {path: '/buscar/:texto', component: BuscarComponent},
    {path: '/pelicula/:id/:pag', name: 'pelicula', component: PeliculaComponent},
    {path: '/pelicula/:id/:pag/:busqueda', component: PeliculaComponent},
    {path: '/:catchAll(.*)', component: ErrorComponent }
];

const router = createRouter({
    history : createWebHistory(import.meta.env.BASE_URL),
    routes
  });

export default router;