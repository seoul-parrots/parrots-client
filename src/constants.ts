import type { ChainInfo } from '@keplr-wallet/types';

export const CHAIN_ID = 'parrots';
export const RPC_ENDPOINT = 'http://10.200.96.204:26657';
export const REST_ENDPOINT = 'http://10.200.96.204:1317';

export const TESTNET_CHAIN_INFO: ChainInfo = {
  chainId: 'parrots',
  chainName: 'Parrots Chain',
  rpc: RPC_ENDPOINT,
  rest: REST_ENDPOINT,
  bip44: {
    coinType: 118,
  },
  bech32Config: {
    bech32PrefixAccAddr: 'parrots',
    bech32PrefixAccPub: 'parrots' + 'pub',
    bech32PrefixValAddr: 'parrots' + 'valoper',
    bech32PrefixValPub: 'parrots' + 'valoperpub',
    bech32PrefixConsAddr: 'parrots' + 'valcons',
    bech32PrefixConsPub: 'parrots' + 'valconspub',
  },
  currencies: [
    {
      coinDenom: 'STAKE',
      coinMinimalDenom: 'stake',
      coinDecimals: 0,
    },
    {
      coinDenom: 'THETA',
      coinMinimalDenom: 'theta',
      coinDecimals: 0,
    },
  ],
  feeCurrencies: [
    {
      coinDenom: 'STAKE',
      coinMinimalDenom: 'stake',
      coinDecimals: 0,
    },
  ],
  stakeCurrency: {
    coinDenom: 'STAKE',
    coinMinimalDenom: 'stake',
    coinDecimals: 0,
  },
  coinType: 118,
  gasPriceStep: {
    low: 0.0000000001,
    average: 0.0000000001,
    high: 0.0000000001,
  },
  features: ['stargate', 'ibc-transfer', 'no-legacy-stdTx'],
};

export const TAGS = [
  {
    title: 'Beak Type',
    options: ['Song', 'VSTi', 'Sample', 'Sheet'],
  },
  {
    title: 'Genre',
    options: [
      'K-Pop',
      'Hip-Hop',
      'Indie',
      'Dance',
      'Electronic',
      'Jazz',
      'Classic',
      'Rock',
      'Ambient',
      'Game',
      'Punk',
      'R&B',
    ],
  },
  {
    title: 'Instruments',
    options: [
      'Instruments',
      'Piano',
      'Synthesizer',
      'Drum',
      'Bass',
      'Acoustic Guitar',
      'Orchestra',
      'Strings',
      'Electronic Guitar',
      'Flute',
      'Beats',
      'Brass',
    ],
  },
];
