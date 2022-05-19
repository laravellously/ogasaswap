import { ReactNode } from 'react';

import WidgetsTwoToneIcon from '@mui/icons-material/WidgetsTwoTone';
import DashboardTwoToneIcon from '@mui/icons-material/DashboardTwoTone';
import RedeemTwoToneIcon from '@mui/icons-material/RedeemTwoTone';
import ThumbUpTwoToneIcon from '@mui/icons-material/ThumbUpTwoTone';
import ChatTwoToneIcon from '@mui/icons-material/ChatTwoTone';
import LanguageTwoToneIcon from '@mui/icons-material/LanguageTwoTone';
import SupervisedUserCircleTwoToneIcon from '@mui/icons-material/SupervisedUserCircleTwoTone';

export interface MenuItem {
  id: string
  link: string;
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
    heading: 'MENU',
    items: [
      {
        id: 'home',
        name: 'Dashboard',
        link: '/',
        icon: DashboardTwoToneIcon
      },
      {
        id: 'purchase',
        name: 'Buy Token',
        link: '/contribute',
        icon: WidgetsTwoToneIcon
      },
      {
        id: 'referrals',
        name: 'Referrals',
        link: '/referrals',
        icon: SupervisedUserCircleTwoToneIcon
      },
      {
        id: 'airdrop',
        name: 'Airdrop',
        link: '/airdrop',
        icon: RedeemTwoToneIcon
      }
    ]
  },
  {
    heading: 'LINKS',
    items: [
      {
        id: 'link-twitter',
        name: 'Twitter',
        link: 'https://twitter.com/ogasaswap',
        icon: ThumbUpTwoToneIcon
      },
      {
        id: 'link-telegram',
        name: 'Telegram',
        link: 'https://telegram.com',
        icon: ChatTwoToneIcon
      },
      {
        id: 'link-website',
        name: 'Website',
        link: 'https://ogasaswap.com',
        icon: LanguageTwoToneIcon
      }
    ]
  }
];

export default menuItems;
