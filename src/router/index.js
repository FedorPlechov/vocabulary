import { createRouter, createWebHistory } from "vue-router";
import Auth from "@/views/Auth";
import Vocabulary from "@/views/Vocabulary";
import DetailChunk from "@/views/ChunkDetails/DetailChunk";
import EditChunk from "@/views/ChunkDetails/EditChunk";
import DeleteChunk from "@/views/ChunkDetails/DeleteChunk";
import TheImg from "@/views/ChunkDetails/TheImg";
import CreateChunk from "@/views/CreateChunk";
import store from '../store/index';
import NotFound from "@/views/NotFound";


const routes = [
  {
    path: "/",
    name: "Auth",
    component: Auth,
    meta: { requiresUnauth: true }
  },
  {
    path: '/vocabulary',
    name: "Vocabulary",
    component: Vocabulary,
    meta: { requiresAuth: true },
  },
  {
    path: '/vocabulary/:id/',
    name: "DetailChunk",
    component: DetailChunk,
    props:true,
    meta: { requiresAuth: true },
    children: [
      {
        path: 'img',
        name: 'img',
        component: TheImg
      },
      {
        path: 'edit',
        name: 'Edit',
        component: EditChunk
      },
      {
        path: 'delete',
        name: 'Delete',
        component: DeleteChunk
      },

    ]
  },
  {
    path: '/create',
    name: "CreateChunk",
    component: CreateChunk,
    meta: { requiresAuth: true }
  },
  {
    path: '/:notFound(.*)',
    redirect: '/vocabulary'
  },
  {
    path: '/vocabulary/:notFound(.*)',
    component: NotFound
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
router.beforeEach(function(to, _, next) {
  if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
    next({name: 'Auth'});
  } else if (to.meta.requiresUnauth && store.getters.isAuthenticated) {
    next({name: 'Vocabulary'});
  } else {
    next();
  }
});

export default router;
