import { MenuEntry } from '@padswap/uikit'

const config: MenuEntry[] = [
  {
    label: "Network",
    icon: "ToadLogo",
    items: [
      {
        label: "BSC",
        href: "https://padswap.exchange",
      },
      {
        label: "MoonRiver",
        href: "https://movr.padswap.exchange",
      },
    ],
    // calloutClass: "rainbow",
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
  // {
  //   label: "LaunchPad",
  //   icon: "VaultIcon",
  //   href: "https://dapps.padswap.exchange/launchpad",
  // },
  {
    label: "MOVR Bridge",
    icon: "VaultIcon",
    href: "https://v2.padswap.exchange/bridge",
  },
  {
    label: 'Liquidity Farm',
    icon: 'PoolIcon',
    href: 'https://dapps.padswap.exchange/lpfarms',
  },
  {
    label: 'Farms',
    icon: 'ChartIcon',
    href: 'https://dapps.padswap.exchange',
  },
  {
    label: 'Stats',
    icon: 'ChartIcon',
    href: 'https://info.padswap.exchange',
  },
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
