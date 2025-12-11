import {
  ConnectButton,
  RainbowKitProvider,
  getDefaultConfig,
} from "@rainbow-me/rainbowkit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import { base } from "wagmi/chains";
import "@rainbow-me/rainbowkit/styles.css";
import { sdk } from "@farcaster/miniapp-sdk";  // ← правильный импорт: sdk, не ready   // ← добавили импорт

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
          <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-black flex flex-col items-center justify-center px-6 py-12 text-white gap-10">
            <h1 className="text-5xl font-bold text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Farcaster × Base
            </h1>

            <ConnectButton
              chainStatus="icon"
              showBalance={false}
              accountStatus="avatar"
            />
{/* ←←← ТВОЙ NFT МИНТИТСЯ ПРЯМО В WARPCAST */}
<div className="w-full max-w-sm">
  {/* @ts-nocheck — Farcaster Frames v2 не распознаются только на сервере Warpcast */}
  {/* @ts-ignore */}
  {/* @ts-nocheck */}
  <fc:frame>
    <fc:frame-image src="https://i.imgur.com/3oJ2K8P.png" />
    <fc:frame-button
      action="tx"
      target={`/api/mint?contract=0x1cf8371d81661e017dc034c6b20da71c3939ab8d&tokenId=0&referrer=0x98601d86250fd966ef4b7b35a9cfff4038e79eea`}
    >
      Минт мой NFT (0.005 ETH)
    </fc:frame-button>
    <fc:frame-button action="link" target="https://zora.co/coin/base:0x1cf8371d81661e017dc034c6b20da71c3939ab8d">
      Посмотреть на Zora
    </fc:frame-button>
  </fc:frame>
</div>

            <p className="absolute bottom-6 text-xs opacity-50">
              Бесплатный минт • работает в Warpcast
            </p>
          </div>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

// ←←← ЭТА СТРОЧКА ДОЛЖНА БЫТЬ ПОСЛЕДНЕЙ В ФАЙЛЕ
// ←←← Последняя строка файла:
sdk.actions.ready();  // ← маленькая r, через sdk.actions;