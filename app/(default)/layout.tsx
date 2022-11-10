import '../../styles/globals.css';
import Header from '../_shared/header';

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  // const network = WalletAdapterNetwork.Devnet;
  // const endpoint = useMemo(() => clusterApiUrl(network), [network]);
  // const wallets = useMemo(
  //   () => [new PhantomWalletAdapter(), new UnsafeBurnerWalletAdapter()],
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  //   [network]
  // );

  return (
    <html>
      <head>
        <title>Home</title>
      </head>
      <body>
        <Header />
        {/* <ConnectionProvider endpoint={endpoint}>
          <WalletProvider wallets={wallets} autoConnect>
            <WalletModalProvider>TEST</WalletModalProvider>
          </WalletProvider>
        </ConnectionProvider> */}
        <div className="root-layout">{children}</div>
      </body>
    </html>
  );
}
