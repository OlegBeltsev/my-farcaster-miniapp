import { ConnectButton, RainbowKitProvider, getDefaultConfig } from "@rainbow-me/rainbowkit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import { base } from "wagmi/chains";
import "@rainbow-me/rainbowkit/styles.css";
import { useEffect } from "react";

const config = getDefaultConfig({
  appName: "MintCaster",
  projectId: "c0d1e4e8f2a9c8b4d5e6f7a8b9c0d1e2",
  chains: [base],
});

const queryClient = new QueryClient();

export default function App() {
  // Правильный вызов ready() — без импорта, без ошибок
  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).farcaster?.sdk?.actions?.ready) {
      (window as any).farcaster.sdk.actions.ready();
    }
  }, []);

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <div className="min-h-screen bg-gradient-to-br from-[#0052FF] via-[#8B5CF6] to-[#EC4899] flex flex-col items-center justify-center p-8 text-white">
            <h1 className="text-6xl md:text-7xl font-black bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200 mb-8">
              Base Mint
            </h1>

            <p className="text-xl md:text-2xl text-center text-gray-200 mb-16 max-w-2xl">
              Mint your exclusive NFT on Base — one click in Warpcast
            </p>

            <div className="mb-24">
              <ConnectButton chainStatus="icon" showBalance={false} accountStatus="avatar" />
            </div>

            <div className="w-full max-w-md">
              <a
                href="https://zora.co/coin/base:0x1cf8371d81661e017dc034c6b20da71c3939ab8d?referrer=0x98601d86250fd966ef4b7b35a9cfff4038e79eea"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-white text-[#0052FF] hover:bg-[#0052FF] hover:text-white font-bold text-2xl py-7 px-12 rounded-3xl text-center shadow-2xl transform transition-all hover:scale-105 duration-300"
              >
                Mint NFT (0.005 ETH)
              </a>
            </div>

            <p className="absolute bottom-8 text-gray-400 text-sm">
              Works in Warpcast • Base chain
            </p>
          </div>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}