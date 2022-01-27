import { ChainId, JSBI, Percent, Token, WETH } from '@padswap/sdk'

export const ROUTER_ADDRESS = '0x76437234D29f84D9A12820A137c6c6A719138C24'

// a list of tokens by chain
type ChainTokenList = {
  readonly [chainId in ChainId]: Token[]
}

export const TOAD = new Token(ChainId.MAINNET, '0x463e737d8f740395abf44f7aac2d9531d8d539e9', 18, 'TOAD', 'Toad Token')
export const PAD = new Token(ChainId.MAINNET, '0xC0888d80EE0AbF84563168b3182650c0AdDEb6d5', 18, 'PAD', 'Pad Token')
export const BNB = new Token(ChainId.MAINNET, '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c', 18, 'BNB', 'BNB')
export const BTC = new Token(ChainId.MAINNET, '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c', 18, 'BTC', 'Bitcoin')
export const USDC = new Token(ChainId.MAINNET, '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d', 18, 'USDC', 'USDC')
export const HOGE = new Token(ChainId.MAINNET, '0xa4FFfc757e8c4F24E7b209C033c123D20983Ad40', 9, 'HOGE', 'HOGE')
export const PXBSC = new Token(ChainId.MAINNET, '0xa4cfe5ea184a9a8bb2bb8377a378606a36ddea80', 18, 'PXBSC', 'PXBSC')
export const GAL = new Token(ChainId.MAINNET, '0x580655e2c6d4fc125c0b2d37b2a3e56219bf9f78', 9, 'GAL', 'GAL')
export const CZATS = new Token(ChainId.MAINNET, '0x56747ed2fca81b25fae112c7a9d4465e947aac56', 18, 'CZATS', 'CZATS')
export const DOGE = new Token(ChainId.MAINNET, '0xbA2aE424d960c26247Dd6c32edC70B295c744C43', 8, 'DOGE', 'DOGE')
export const ADA = new Token(ChainId.MAINNET, '0x3EE2200Efb3400fAbB9AacF31297cBdD1d435D47', 18, 'ADA', 'ADA')
export const DOT = new Token(ChainId.MAINNET, '0x7083609fCE4d1d8Dc0C979AAb8c869Ea2C873402', 18, 'DOT', 'DOT')
export const KISH = new Token(ChainId.MAINNET, '0xCAb599D699f818e6ceFd07cF54f448DAB9367B05', 9, 'KISH', 'KISH')
export const MRBTC = new Token(ChainId.MAINNET, '0x001Ef4385D199454b76527fd91Af3Da8C0a51537', 9, 'MRBTC', 'MRBTC')
export const DAI = new Token(ChainId.MAINNET, '0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3', 18, 'DAI', 'Dai Stablecoin')
export const BUSD = new Token(ChainId.MAINNET, '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56', 18, 'BUSD', 'Binance USD')
export const USDT = new Token(ChainId.MAINNET, '0x55d398326f99059fF775485246999027B3197955', 18, 'USDT', 'Tether USD')
export const UST = new Token(
  ChainId.MAINNET,
  '0x23396cF899Ca06c4472205fC903bDB4de249D6fC',
  18,
  'UST',
  'Wrapped UST Token'
)
export const ETH = new Token(
  ChainId.MAINNET,
  '0x2170Ed0880ac9A755fd29B2688956BD959F933F8',
  18,
  'ETH',
  'Binance-Peg Ethereum Token'
)

const WETH_ONLY: ChainTokenList = {
  [ChainId.MAINNET]: [WETH[ChainId.MAINNET]],
  [ChainId.BSCTESTNET]: [WETH[ChainId.BSCTESTNET]],
}

// used to construct intermediary pairs for trading
export const BASES_TO_CHECK_TRADES_AGAINST: ChainTokenList = {
  ...WETH_ONLY,
  [ChainId.MAINNET]: [...WETH_ONLY[ChainId.MAINNET], TOAD, PAD, BNB, BTC, USDC, HOGE, PXBSC, GAL, CZATS, DOGE, ADA, DOT, KISH, MRBTC, DAI, BUSD,USDT, ETH],
}

/**
 * Some tokens can only be swapped via certain pairs, so we override the list of bases that are considered for these
 * tokens.
 */
export const CUSTOM_BASES: { [chainId in ChainId]?: { [tokenAddress: string]: Token[] } } = {
  [ChainId.MAINNET]: {},
}

// used for display in the default list when adding liquidity
export const SUGGESTED_BASES: ChainTokenList = {
  ...WETH_ONLY,
  [ChainId.MAINNET]: [...WETH_ONLY[ChainId.MAINNET], TOAD, PAD, BNB, BTC, USDC, HOGE, PXBSC, GAL, CZATS, DOGE, ADA, DOT, KISH, MRBTC, DAI, BUSD,USDT, ETH],
}

// used to construct the list of all pairs we consider by default in the frontend
export const BASES_TO_TRACK_LIQUIDITY_FOR: ChainTokenList = {
  ...WETH_ONLY,
  [ChainId.MAINNET]: [...WETH_ONLY[ChainId.MAINNET], TOAD, PAD, BNB, BTC, USDC, HOGE, PXBSC, GAL, CZATS, DOGE, ADA, DOT, KISH, MRBTC, DAI, BUSD,USDT, ETH],
}

export const PINNED_PAIRS: { readonly [chainId in ChainId]?: [Token, Token][] } = {
  [ChainId.MAINNET]: [
    [
      new Token(ChainId.MAINNET, '0xC0888d80EE0AbF84563168b3182650c0AdDEb6d5', 18, 'PAD', 'Lily Pad'),
      new Token(ChainId.MAINNET, '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c', 18, 'WBNB', 'Wrapped BNB'),
    ],
    [BUSD, USDT],
    [DAI, USDT],
  ],
}

export const NetworkContextName = 'NETWORK'

// default allowed slippage, in bips
export const INITIAL_ALLOWED_SLIPPAGE = 80
// 20 minutes, denominated in seconds
export const DEFAULT_DEADLINE_FROM_NOW = 60 * 20

// one basis point
export const ONE_BIPS = new Percent(JSBI.BigInt(1), JSBI.BigInt(10000))
export const BIPS_BASE = JSBI.BigInt(10000)
// used for warning states
export const ALLOWED_PRICE_IMPACT_LOW: Percent = new Percent(JSBI.BigInt(100), BIPS_BASE) // 1%
export const ALLOWED_PRICE_IMPACT_MEDIUM: Percent = new Percent(JSBI.BigInt(300), BIPS_BASE) // 3%
export const ALLOWED_PRICE_IMPACT_HIGH: Percent = new Percent(JSBI.BigInt(500), BIPS_BASE) // 5%
// if the price slippage exceeds this number, force the user to type 'confirm' to execute
export const PRICE_IMPACT_WITHOUT_FEE_CONFIRM_MIN: Percent = new Percent(JSBI.BigInt(1000), BIPS_BASE) // 10%
// for non expert mode disable swaps above this
export const BLOCKED_PRICE_IMPACT_NON_EXPERT: Percent = new Percent(JSBI.BigInt(1500), BIPS_BASE) // 15%

// used to ensure the user doesn't send so much ETH so they end up with <.01
export const MIN_ETH: JSBI = JSBI.exponentiate(JSBI.BigInt(10), JSBI.BigInt(16)) // .01 ETH
