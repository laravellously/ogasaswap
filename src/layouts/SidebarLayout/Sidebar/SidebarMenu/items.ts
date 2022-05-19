import { ReactNode } from 'react';

import WidgetsTwoToneIcon from '@mui/icons-material/WidgetsTwoTone';
import DashboardTwoToneIcon from '@mui/icons-material/DashboardTwoTone';
import RedeemTwoToneIcon from '@mui/icons-material/RedeemTwoTone';
import VerifiedUserTwoToneIcon from '@mui/icons-material/VerifiedUserTwoTone';
import SupervisedUserCircleTwoToneIcon from '@mui/icons-material/SupervisedUserCircleTwoTone';

export interface MenuItem {
  link?: string;
  icon?: any
  badge?: string;
  items?: MenuItem[];
  name: string;
}

export interface MenuItems {
  items: MenuItem[];
  heading: string;
}

const menuItems: MenuItems[] = [
  {
    heading: '',
    items: [
      {
        name: 'Dashboard',
        link: '/',
        icon: DashboardTwoToneIcon
      },
      {
        name: 'Buy Token',
        link: '/contribute',
        icon: WidgetsTwoToneIcon
      },
      {
        name: 'Referrals',
        link: '/referrals',
        icon: SupervisedUserCircleTwoToneIcon
      },
      {
        name: 'Airdrop',
        link: '/airdrop',
        icon: RedeemTwoToneIcon
      }
    ]
  }
];

export default menuItems;
