'use-client';

import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import {
  ConnectionProvider,
  WalletProvider
} from '@solana/wallet-adapter-react';
import {
  WalletModalProvider,
  WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets';
import { clusterApiUrl } from '@solana/web3.js';
// import type { AppProps } from 'next/app';
// import type { FC } from 'react';
import React, { useMemo } from 'react';

import Header from '../../_shared/header';
// import React from 'react';
// import dynamic from 'next/dynamic';

// const WalletDisconnectButtonDynamic = dynamic(
//   async () =>
//     (await import('@solana/wallet-adapter-react-ui')).WalletDisconnectButton,
//   { ssr: false }
// );
// const WalletMultiButtonDynamic = dynamic(
//   async () =>
//     (await import('@solana/wallet-adapter-react-ui')).WalletMultiButton,
//   { ssr: false }
// );

export default function Home() {
  const network = WalletAdapterNetwork.Devnet;
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);
  // const wallets = useMemo(
  //   // () => [new PhantomWalletAdapter()],
  //   () => [],
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  //   [network]
  // );

  return (
    <div className="base-page">
      <ConnectionProvider endpoint={endpoint}>
        {/* <WalletProvider wallets={wallets} autoConnect> */}
        {/* <WalletModalProvider>
              <WalletMultiButton /> */}
        <Header />
        <h1 className="text-2xl text-blue font-bold">Wallet</h1>
        {/* <WalletMultiButtonDynamic />
      <WalletDisconnectButtonDynamic /> */}
        {/* </WalletModalProvider> */}
        {/* </WalletProvider> */}
      </ConnectionProvider>
    </div>
  );
}
