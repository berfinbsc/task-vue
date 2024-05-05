import UsersPage from '@/views/UsersPage.vue';
import UserDetail from '@/views/UserDetail.vue';
import { createRouter, createWebHistory } from 'vue-router';


const routes = [
    { path: "/", component: UsersPage },
    { path: "/user/:id", component: UserDetail },
  ];

  const router = new createRouter({
    history: createWebHistory(),
  routes,
  });

  export default router;