import { MenuEntry } from '@padswap/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://padswap.exchange/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap',
      },
      {
        label: 'Liquidity',
        href: '/pool',
      },
    ],
  },
  {
    label: "Vault",
    icon: "VaultIcon",
    href: "https://dapps.padswap.exchange/vault",
  },
  {
    label: "Farms",
    icon: "FarmIcon",
    items: [
      {
        label: "PAD-TOAD",
        href: "https://dapps.padswap.exchange/farms-pad-toad",
      },
      {
        label: "TOAD-BNB",
        href: "https://dapps.padswap.exchange/farms-toad-bnb",
      },
      {
        label: "TOAD-BUSD",
        href: "https://dapps.padswap.exchange/farms-toad-busd",
      },
      {
        label: "TOAD ONLY",
        href: "https://dapps.padswap.exchange/farms-toad-only",
      },
    ],
    // calloutClass: "rainbow",
  },
//   {
//     label: 'Chart/Stats',
//     icon: 'ChartIcon',
//     href: '/chart',
//   },
 /* {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/syrup',
  },
  {
    label: 'Lottery',
    icon: 'TicketIcon',
    href: '/lottery',
  },
  {
    label: 'NFT',
    icon: 'NftIcon',
    href: '/nft',
  }, */
  /* {
    label: 'Teams & Profile',
    icon: 'GroupsIcon',
    calloutClass: 'rainbow',
    items: [
      {
        label: 'Leaderboard',
        href: '/teams',
      },
      {
        label: 'Task Center',
        href: '/profile/tasks',
      },
      {
        label: 'Your Profile',
        href: '/profile',
      },
    ],
  }, */
  {
    label: "TOAD",
    icon: "ToadLogo",
    items: [
      {
        label: "Farms",
        href: "https://toad.network/#/why_choose",
      },
      {
        label: "LP Farms",
        href: "https://toad.network/lpfarming.html",
      },
      {
        label: "Church",
        href: "https://toadnetwork.church",
      },
    ],
    // calloutClass: "rainbow",
  },
/* {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Overview',
        href: 'https://pancakeswap.info',
      },
      {
        label: 'Tokens',
        href: 'https://pancakeswap.info/tokens',
      },
      {
        label: 'Pairs',
        href: 'https://pancakeswap.info/pairs',
      },
      {
        label: 'Accounts',
        href: 'https://pancakeswap.info/accounts',
      },
    ],
  },  */
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: "Github",
        href: "https://github.com/ToadNetwork",
      },
      {
        label: "Medium",
        href: "https://toadytoad.medium.com/",
      },
    ],
  },
]

export default config
