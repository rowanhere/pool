"use client"
import React, {  useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { PhantomWalletAdapter, SolflareWalletAdapter, TrustWalletAdapter } from '@solana/wallet-adapter-wallets';

import { clusterApiUrl } from '@solana/web3.js';
import { BackpackWalletAdapter } from '@solana/wallet-adapter-backpack';

// Default styles that can be overridden by your app
require('@solana/wallet-adapter-react-ui/styles.css');

export const Wallet = ({children}) => {
    // The network can be set to 'devnet', 'testnet', or 'mainnet-beta'.

    const endpoint = useMemo(() => clusterApiUrl("mainnet-beta","confirmed"), []);

    const wallets = useMemo(
        () => [
            new PhantomWalletAdapter(),
            new SolflareWalletAdapter(),
            new BackpackWalletAdapter(),
            new TrustWalletAdapter()
        ],
        // eslint-disable-next-line react-hooks/exhaustive-deps
        []
    );

    return (
        <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={wallets} autoConnect>
                    { children }
            </WalletProvider>
        </ConnectionProvider>
    );
};