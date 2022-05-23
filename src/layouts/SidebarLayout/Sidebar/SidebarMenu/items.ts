import { ReactNode } from 'react';

import WidgetsTwoToneIcon from '@mui/icons-material/WidgetsTwoTone';
import DashboardTwoToneIcon from '@mui/icons-material/DashboardTwoTone';
import RedeemTwoToneIcon from '@mui/icons-material/RedeemTwoTone';
import ThumbUpTwoToneIcon from '@mui/icons-material/ThumbUpTwoTone';
import ChatTwoToneIcon from '@mui/icons-material/ChatTwoTone';
import LanguageTwoToneIcon from '@mui/icons-material/LanguageTwoTone';
import SupervisedUserCircleTwoToneIcon from '@mui/icons-material/SupervisedUserCircleTwoTone';


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
  },
  {
    heading: 'LINKS',
    items: [
      {
        name: 'Twitter',
        link: 'https://twitter.com/ogasaswap',
        icon: ThumbUpTwoToneIcon
      },
      {
        name: 'Telegram',
        link: 'https://telegram.com',
        icon: ChatTwoToneIcon
      },
      {
        name: 'Website',
        link: 'https://ogasaswap.com',
        icon: LanguageTwoToneIcon
      }
    ]
  }
];

export default menuItems;
