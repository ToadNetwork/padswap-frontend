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
      {
        label: "MoonBeam",
        href: "https://glmr.padswap.exchange",
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
  {
    label: 'Farms',
    icon: 'ChartIcon',
    href: 'https://dapps.padswap.exchange/farms',
  },
  {
    label: 'Bridge',
    icon: 'ChartIcon',
    href: 'https://dapps.padswap.exchange/bridge',
  },
  {
    label: 'Vault',
    icon: 'ChartIcon',
    href: 'https://dapps.padswap.exchange/vault',
  },
  {
    label: 'Stats',
    icon: 'ChartIcon',
    href: 'https://info.padswap.exchange/',
  }
]

export default config
