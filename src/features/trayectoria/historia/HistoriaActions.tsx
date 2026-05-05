import { useState } from "react";

interface HistoriaActionsProps {
  cliente?: string;
}

export function HistoriaActions({ cliente }: HistoriaActionsProps) {
  const [showShareTooltip, setShowShareTooltip] = useState(false);

  const getCurrentUrl = () => (typeof window !== "undefined" ? window.location.href : "");

  const shareUrls = {
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(getCurrentUrl())}`,
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(`Caso de éxito: ${cliente}`)}&url=${encodeURIComponent(getCurrentUrl())}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(getCurrentUrl())}`,
    whatsapp: `https://wa.me/?text=${encodeURIComponent(`${cliente} - ${getCurrentUrl()}`)}`,
    email: `mailto:?subject=${encodeURIComponent(`Caso de éxito: ${cliente}`)}&body=${encodeURIComponent(`Mirá este caso de éxito:\n\n${getCurrentUrl()}`)}`,
  };

  const handleShare = (platform: keyof typeof shareUrls) => {
    window.open(shareUrls[platform], '_blank', 'width=600,height=400');
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setShowShareTooltip(true);
      setTimeout(() => setShowShareTooltip(false), 2000);
    } catch (err) {
      console.error('Error al copiar:', err);
    }
  };

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-gray-200 pb-6 mb-10">
      <div className="flex items-center gap-2">
        <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">Compartir este caso</span>
        <div className="h-4 w-px bg-gray-300"></div>
        <div className="flex items-center gap-1">
          <button
            onClick={() => handleShare('linkedin')}
            className="p-2 text-gray-400 hover:text-[#0077B5] transition-colors rounded-lg hover:bg-gray-50"
            aria-label="Compartir en LinkedIn"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </button>
          <button
            onClick={() => handleShare('twitter')}
            className="p-2 text-gray-400 hover:text-black transition-colors rounded-lg hover:bg-gray-50"
            aria-label="Compartir en X"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </button>
          <button
            onClick={() => handleShare('facebook')}
            className="p-2 text-gray-400 hover:text-[#1877F2] transition-colors rounded-lg hover:bg-gray-50"
            aria-label="Compartir en Facebook"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </button>
          <button
            onClick={() => handleShare('whatsapp')}
            className="p-2 text-gray-400 hover:text-[#25D366] transition-colors rounded-lg hover:bg-gray-50"
            aria-label="Compartir en WhatsApp"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.032 0c-6.627 0-12 5.373-12 12 0 2.168.577 4.207 1.587 5.977L.05 23.95l6.114-1.522c1.716.945 3.708 1.483 5.868 1.483 6.627 0 12-5.373 12-12s-5.373-12-12-12zm0 22c-1.849 0-3.584-.524-5.051-1.424l-.362-.215-3.629.905.968-3.537-.236-.376c-1.024-1.566-1.621-3.404-1.621-5.353 0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10z"/>
              <path d="M17.066 14.322c-.28-.14-1.66-.819-1.917-.912-.257-.094-.444-.14-.631.14-.187.28-.724.912-.888 1.099-.164.187-.328.21-.608.07-.28-.14-1.182-.436-2.252-1.389-.832-.742-1.394-1.659-1.557-1.939-.163-.28-.018-.432.123-.571.126-.126.28-.328.42-.492.14-.164.187-.28.28-.468.094-.187.047-.35-.023-.49-.07-.14-.631-1.521-.865-2.082-.228-.548-.46-.474-.631-.483l-.536-.01c-.187 0-.49.07-.747.35-.257.28-.98.957-.98 2.335 0 1.378 1.003 2.708 1.143 2.895.14.187 1.973 3.013 4.78 4.224 2.807 1.211 2.807.808 3.314.757.507-.05 1.635-.668 1.866-1.313.23-.645.23-1.198.16-1.313-.07-.117-.256-.187-.536-.327z"/>
            </svg>
          </button>
          <button
            onClick={() => handleShare('email')}
            className="p-2 text-gray-400 hover:text-gray-700 transition-colors rounded-lg hover:bg-gray-50"
            aria-label="Compartir por email"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </button>
          <div className="relative">
            <button
              onClick={copyToClipboard}
              className="p-2 text-gray-400 hover:text-[#34A12C] transition-colors rounded-lg hover:bg-gray-50"
              aria-label="Copiar enlace"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </button>
            {showShareTooltip && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-2 py-1 bg-gray-900 text-white text-xs rounded whitespace-nowrap">
                ¡Enlace copiado!
              </div>
            )}
          </div>
        </div>
      </div>
      
      <div className="flex items-center gap-2 text-xs text-gray-400">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
        <span>Lectura: 3 minutos</span>
      </div>
    </div>
  );
}
