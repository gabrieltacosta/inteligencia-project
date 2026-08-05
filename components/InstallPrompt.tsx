"use client";
import { useEffect, useState } from "react";

export default function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handler = (e: any) => {
      e.preventDefault(); // Impede o navegador de mostrar o mini-infobar padrão
      setDeferredPrompt(e);
      setShowButton(true); // Exibe o seu banner/botão customizado
    };

    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt(); // Mostra o prompt nativo ao usuário
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === "accepted") {
      setDeferredPrompt(null);
      setShowButton(false);
    }
  };

  if (!showButton) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-blue-600 text-white p-4 rounded-lg shadow-lg flex items-center gap-4">
      <span>Instalar nosso aplicativo?</span>
      <button
        onClick={handleInstallClick}
        className="bg-white text-blue-600 px-3 py-1.5 rounded font-bold text-sm"
      >
        Instalar
      </button>
    </div>
  );
}
