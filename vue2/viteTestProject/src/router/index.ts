import { createRouter, createWebHistory } from 'vue-router';
import Matrix from '../components/Matrix.vue';

// 定义路由规则
const routes = [
  {
    path: '/',
    name: 'Matrix',
    component: Matrix,
  },
];

// 创建路由实例
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;