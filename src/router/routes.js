// import Dashboard from '../pages/Dashboard'
// import Sunburst from '../components/charts/Sunburst'
// import Sunburst from '../pages/WorldPopulation'
const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: () => import('../pages/WorldPopulation')
  }
];

export default routes;
