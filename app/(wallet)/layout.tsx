'use client';

import { ReactNode } from 'react';
import '../../styles/globals.css';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <head>
        <title>Wallet</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
