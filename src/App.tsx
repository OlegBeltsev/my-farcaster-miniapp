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

            {/* Рабочий минт от Zora */}
           {/* ←←← РАБОЧИЙ МИНТ В WARPCAST — без попапов */}
<div className="w-full max-w-sm">
  <a
    href="https://warpcast.com/~/add-cast-action?url=https%3A%2F%2Fzora.co%2Fcollect%2Fbase%3A0x04e2539779f6e89529cd21b1e7df7e19982fd20e0%2F1"
    className="block w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold py-4 px-6 rounded-2xl text-center shadow-lg hover:shadow-xl transition"
  >
    Минт бесплатный NFT
  </a>
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