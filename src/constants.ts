import type { ChainInfo } from '@keplr-wallet/types';

export const CHAIN_ID = 'parrots';
export const ENDPOINT = 'http://10.200.96.204:26657';

export const TESTNET_CHAIN_INFO: ChainInfo = {
  chainId: 'parrots',
  chainName: 'Parrots Chain',
  rpc: ENDPOINT,
  rest: ENDPOINT,
  bip44: {
    coinType: 118,
  },
  bech32Config: {
    bech32PrefixAccAddr: 'cosmos',
    bech32PrefixAccPub: 'cosmos' + 'pub',
    bech32PrefixValAddr: 'cosmos' + 'valoper',
    bech32PrefixValPub: 'cosmos' + 'valoperpub',
    bech32PrefixConsAddr: 'cosmos' + 'valcons',
    bech32PrefixConsPub: 'cosmos' + 'valconspub',
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
    low: 1,
    average: 1,
    high: 1,
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
