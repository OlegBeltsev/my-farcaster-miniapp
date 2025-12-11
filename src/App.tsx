import { ConnectButton, RainbowKitProvider, getDefaultConfig } from "@rainbow-me/rainbowkit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import { base } from "wagmi/chains";
import "@rainbow-me/rainbowkit/styles.css";

const config = getDefaultConfig({
  appName: "MintCaster",
  projectId: "c0d1e4e8f2a9c8b4d5e6f7a8b9c0d1e2",
  chains: [base],
});

const queryClient = new QueryClient();

export default function App() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-blue-900 flex flex-col items-center justify-center p-8 text-white">
            <h1 className="text-mt-20 text-6xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Base Mini Mint
            </h1>

            <p className="mt-8 text-xl text-gray-300">
              Mint your exclusive NFT on Base — one click on Base
            </p>

            <div className="mt-12">
              <ConnectButton chainStatus="icon" showBalance={false} accountStatus="avatar" />
            </div>

            {/* ТВОЙ РАБОЧИЙ МИNT (как было раньше, но на английском) */}
            <div className="mt-16 w-full max-w-sm">
              <a
                href="https://zora.co/coin/base:0x1cf8371d81661e017dc034c6b20da71c3939ab8d?referrer=0x98601d86250fd966ef4b7b35a9cfff4038e79eea"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold text-xl py-5 px-8 rounded-2xl text-center shadow-2xl transform transition hover:scale-105"
              >
                Mint NFT (0.005 ETH)
              </a>
            </div>

            <p className="absolute bottom-8 text-gray-500 text-sm">
              Works in Warpcast • Base chain
            </p>
          </div>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

import { sdk } from "@farcaster/miniapp-sdk";
sdk.actions.ready();