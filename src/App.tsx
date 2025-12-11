// @ts-nocheck
import { ConnectButton, RainbowKitProvider, getDefaultConfig } from "@rainbow-me/rainbowkit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import { base } from "wagmi/chains";
import "@rainbow-me/rainbowkit/styles.css";
import { ready } from "@farcaster/miniapp-sdk";

const config = getDefaultConfig({
  appName: "Base Mini Mint",
  projectId: "c0d1e4e8f2a9c8b4d5e6f7a8b9c0d1e2",
  chains: [base],
});

const queryClient = new QueryClient();

export default function App() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 overflow-hidden relative">
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 via-black to-blue-900/50" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_70%)]" />

            <div className="relative z-10 text-center space-y-12 max-w-md w-full">
              <h1 className="text-6xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Base Mini Mint
              </h1>

              <p className="text-gray-300 text-lg">
                Mint your exclusive NFT on Base — one click in Warpcast
              </p>

              <ConnectButton 
                chainStatus="icon" 
                showBalance={false} 
                accountStatus="avatar" 
              />

              {/* Farcaster Frame – mint in Warpcast */}
              <div className="mt-10">
                <fc:frame>
                  <fc:frame-image src="https://i.imgur.com/3oJ2K8P.png" />
                  <fc:frame-button
                    action="tx"
                    target={`/api/mint?contract=0x1cf8371d81661e017dc034c6b20da71c3939ab8d&tokenId=0&referrer=0x98601d86250fd966ef4b7b35a9cfff4038e79eea`}
                  >
                    Mint NFT (0.005 ETH)
                  </fc:frame-button>
                  <fc:frame-button action="link" target="https://zora.co/coin/base:0x1cf8371d81661e017dc034c6b20da71c3939ab8d">
                    View on Zora
                  </fc:frame-button>
                </fc:frame>
              </div>

              <p className="text-gray-500 text-sm mt-20">
                Mint works directly in Warpcast • Base chain
              </p>
            </div>
          </div>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

ready();