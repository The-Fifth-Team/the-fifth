// import Dashboard from '../pages/Dashboard'
import webcam2 from '../components/webcam-2'
import facialDiscriptorExtractor from '../components/facialDiscriptorExtractor'
const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: webcam2
  },
  {
    path: '/descriptor',
    name: 'descriptor',
    component: facialDiscriptorExtractor
  }
];

export default routes;
