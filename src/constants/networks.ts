import { SupportedChainId } from './chains'

const INFURA_KEY = process.env.REACT_APP_INFURA_KEY
if (typeof INFURA_KEY === 'undefined') {
  throw new Error(`REACT_APP_INFURA_KEY must be a defined environment variable`)
}

/**
 * Fallback JSON-RPC endpoints.
 * These are used if the integrator does not provide an endpoint, or if the endpoint does not work.
 *
 * MetaMask allows switching to any URL, but displays a warning if it is not on the "Safe" list:
 * https://github.com/MetaMask/metamask-mobile/blob/bdb7f37c90e4fc923881a07fca38d4e77c73a579/app/core/RPCMethods/wallet_addEthereumChain.js#L228-L235
 * https://chainid.network/chains.json
 *
 * These "Safe" URLs are listed first, followed by other fallback URLs, which are taken from chainlist.org.
 */
export const FALLBACK_URLS: { [key in SupportedChainId]: string[] } = {
  [SupportedChainId.MAINNET]: [
    // "Safe" URLs
    'https://api.mycryptoapi.com/eth',
    'https://cloudflare-eth.com',
    // "Fallback" URLs
    'https://rpc.ankr.com/eth',
    'https://eth-mainnet.public.blastapi.io',
  ],
  [SupportedChainId.ROPSTEN]: [
    // "Fallback" URLs
    'https://rpc.ankr.com/eth_ropsten',
  ],
  [SupportedChainId.RINKEBY]: [
    // "Fallback" URLs
    'https://rinkeby-light.eth.linkpool.io/',
  ],
  [SupportedChainId.GOERLI]: [
    // "Safe" URLs
    'https://rpc.goerli.mudit.blog/',
    // "Fallback" URLs
    'https://rpc.ankr.com/eth_goerli',
  ],
  [SupportedChainId.KOVAN]: [
    // "Safe" URLs
    'https://kovan.poa.network',
    // "Fallback" URLs
    'https://eth-kovan.public.blastapi.io',
  ],
}

/**
 * Known JSON-RPC endpoints.
 * These are the URLs used by the interface when there is not another available source of chain data.
 */
export const RPC_URLS: { [key in SupportedChainId]: string[] } = {
  [SupportedChainId.MAINNET]: [
    `https://mainnet.infura.io/v3/${INFURA_KEY}`,
    ...FALLBACK_URLS[SupportedChainId.MAINNET],
  ],
  [SupportedChainId.RINKEBY]: [
    `https://rinkeby.infura.io/v3/${INFURA_KEY}`,
    ...FALLBACK_URLS[SupportedChainId.RINKEBY],
  ],
  [SupportedChainId.ROPSTEN]: [
    `https://ropsten.infura.io/v3/${INFURA_KEY}`,
    ...FALLBACK_URLS[SupportedChainId.ROPSTEN],
  ],
  [SupportedChainId.GOERLI]: [`https://goerli.infura.io/v3/${INFURA_KEY}`, ...FALLBACK_URLS[SupportedChainId.GOERLI]],
  [SupportedChainId.KOVAN]: [`https://kovan.infura.io/v3/${INFURA_KEY}`, ...FALLBACK_URLS[SupportedChainId.KOVAN]],
}