import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'nb-home',
    link: '/pages/iot-dashboard',
  },
  {
    title: 'Manage Site',
    icon: 'nb-layout-sidebar-left',
    link: '/pages/admin-site',
    home: true,
  },
  {
    title: 'Manage Users',
    icon: 'nb-person',
    link: '/pages/admin-users',
    home: true,
  },
  {
    title: 'Manage Group',
    icon: 'nb-person',
    link: '/pages/admin-group',
    home: true,
  },
  {
    title: 'Manage Pages',
    icon: 'nb-grid-a-outline',
    link: '/pages/admin-pages',
    home: true,
  },
  {
    title: 'Manage Menu',
    icon: 'nb-menu',
    link: '/pages/dashboard',
    home: true,
  }, 
  {
    title: 'Manage Resource Center',
    icon: 'nb-compose',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'Manage Games',
    icon: 'nb-compose',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'Manage Surveys',
    icon: 'nb-compose',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'Manage Lectures',
    icon: 'nb-compose',
    link: '/pages/dashboard',
    home: true,
  },
];
