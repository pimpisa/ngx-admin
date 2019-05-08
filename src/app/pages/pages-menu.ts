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
    title: 'Manage Elements',
    icon: 'nb-keypad',
    link: '/pages/admin-elements',
    home: true,
  }, 
  {
    title: 'Manage Review',
    icon: 'nb-compose',
    link: '/pages/admin-reviews',
    home: true,
  }, 
  {
    title: 'Manage Menu',
    icon: 'nb-menu',
    link: '/pages/admin-menu',
    home: true,
  }, 
  {
    title: 'Manage Resource Center',
    icon: 'nb-compose',
    link: '/pages/admin-resource-center',
    home: true,
  },
  {
    title: 'Manage Games',
    icon: 'nb-compose',
    link: '/pages/admin-games',
    home: true,
  },
  {
    title: 'Manage Surveys',
    icon: 'nb-compose',
    link: '/pages/admin-surveys',
    home: true,
  },
  {
    title: 'Manage Lectures',
    icon: 'nb-compose',
    link: '/pages/dashboard',
    home: true,
  },
];
