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
  return (
    <div className="home-page">
      <h1 className="text-2xl text-blue font-bold">Home</h1>
      {/* <WalletMultiButtonDynamic />
      <WalletDisconnectButtonDynamic /> */}
    </div>
  );
}
