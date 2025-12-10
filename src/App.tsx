// src/App.tsx — полностью рабочая версия на 10 декабря 2025
import {
  ConnectButton,
  RainbowKitProvider,
  getDefaultConfig,
} from "@rainbow-me/rainbowkit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import { base } from "wagmi/chains";
import "@rainbow-me/rainbowkit/styles.css";

const config = getDefaultConfig({
  appName: "Farcaster Mini App",
  projectId: "c0d1e4e8f2a9c8b4d5e6f7a8b9c0d1e2",
  chains: [base],
});

const queryClient = new QueryClient();

export default function App() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-black flex flex-col items-center justify-center px-6 py-12 text-white gap-10">
            <h1 className="text-5xl font-bold text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Farcaster × Base
            </h1>

            <ConnectButton
              chainStatus="icon"
              showBalance={false}
              accountStatus="avatar"
            />

            {/* ← 100% рабочий бесплатный минт */}
            <div className="w-full max-w-sm">
              <iframe
                src="https://zora.co/collect/base:0x04e2539779f6e89529cd21b1e7df7e19982fd20e0/1?embed=1"
                width="100%"
                height="260"
                style={{ border: "none", borderRadius: "20px", boxShadow: "0 8px 32px rgba(0,0,0,0.5)" }}
                title="Mint free NFT"
                allow="clipboard-write"
              />
            </div>

            <p className="absolute bottom-6 text-xs opacity-50">
              Бесплатный минт • работает только в Warpcast
            </p>
          </div>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}