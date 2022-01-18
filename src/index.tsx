import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import { ResetCSS } from '@padswap/uikit'
import GlobalStyle from './style/Global'
import App from './pages/App'
import ApplicationUpdater from './state/application/updater'
import ListsUpdater from './state/lists/updater'
import MulticallUpdater from './state/multicall/updater'
import TransactionUpdater from './state/transactions/updater'
import ToastListener from './components/ToastListener'
import Providers from './Providers'
import 'inter-ui'
import './i18n'

// workaround for mobile metamask browser. mobile metamask does not inject window.ethereum into iframes
if (!window.ethereum && window.parent && window.parent.ethereum) {
  window.ethereum = window.parent.ethereum
}

// sync auto-connect state from parent window
const parentCachedProvider = localStorage.getItem('WEB3_CONNECT_CACHED_PROVIDER')
if (parentCachedProvider) {
  const cachedProviderValue = JSON.parse(parentCachedProvider).toString() // strip quotes
  localStorage.setItem('connectorId', cachedProviderValue)
}

if ('ethereum' in window) {
  (window.ethereum as any).autoRefreshOnNetworkChange = false
}

window.addEventListener('error', () => {
   localStorage?.removeItem('redux_localstorage_simple_lists')
})

ReactDOM.render(
  <StrictMode>
    <Providers>
      <>
        <ListsUpdater />
        <ApplicationUpdater />
        <TransactionUpdater />
        <MulticallUpdater />
        <ToastListener />
      </>
      <ResetCSS />
      <GlobalStyle />
      <App />
    </Providers>
  </StrictMode>,
  document.getElementById('root')
)
