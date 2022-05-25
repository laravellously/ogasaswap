import { ReactNode } from 'react';

import RedeemTwoToneIcon from '@mui/icons-material/RedeemTwoTone';

export interface MenuItem {
  link?: string;
  icon?: ReactNode;
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
    heading: 'MENU',
    items: [
      {
        name: 'Airdrop',
        link: '/',
        icon: RedeemTwoToneIcon
      }
    ]
  }
];

export default menuItems;
