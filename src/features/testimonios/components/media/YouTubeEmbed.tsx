import { useState, useEffect } from "react";

interface VideoEmbedProps {
  url: string;
  title?: string;
  autoPlay?: boolean;
  showControls?: boolean;
}

const VideoEmbed = ({
  url,
  title = "Video",
  autoPlay = false,
  showControls = true,
}: VideoEmbedProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  // 🔍 Detectar plataforma
  const getPlatform = (url: string) => {
    if (url.includes("youtube.com") || url.includes("youtu.be")) {
      return "youtube";
    }
    if (url.includes("instagram.com")) {
      return "instagram";
    }
    return "unknown";
  };

  const platform = getPlatform(url);

  // =========================
  // 🔴 INSTAGRAM COMPONENT
  // =========================
  const InstagramEmbed = ({ url }: { url: string }) => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
      if (!document.getElementById("instagram-embed-script")) {
        const script = document.createElement("script");
        script.id = "instagram-embed-script";
        script.src = "https://www.instagram.com/embed.js";
        script.async = true;
        document.body.appendChild(script);
      } else {
       
        window.instgrm?.Embeds.process();
      }

      const timer = setTimeout(() => setLoaded(true), 1000);
      return () => clearTimeout(timer);
    }, [url]);

    return (
      <div className="w-full flex justify-center">
        {!loaded && (
          <div className="w-full max-w-135 h-100 bg-gray-100 animate-pulse rounded-xl" />
        )}

        <blockquote
          className="instagram-media"
          data-instgrm-permalink={url}
          data-instgrm-version="14"
          style={{
            width: "100%",
            maxWidth: "540px",
            display: loaded ? "block" : "none",
            borderRadius: "12px",
          }}
        />
      </div>
    );
  };

  // =========================
  // 🔴 YOUTUBE LOGIC (TUYA)
  // =========================
  const getEmbedUrl = (url: string) => {
    try {
      let videoId = "";

      if (url.includes("watch?v=")) {
        videoId = url.split("watch?v=")[1].split("&")[0];
      } else if (url.includes("youtu.be/")) {
        videoId = url.split("youtu.be/")[1].split("?")[0];
      } else if (url.includes("/embed/")) {
        videoId = url.split("/embed/")[1].split("?")[0];
      } else if (url.includes("/shorts/")) {
        videoId = url.split("/shorts/")[1].split("?")[0];
      } else {
        return url;
      }

      const params = new URLSearchParams();
      if (autoPlay) params.append("autoplay", "1");
      if (!showControls) params.append("controls", "0");
      params.append("rel", "0");
      params.append("modestbranding", "1");
      params.append("iv_load_policy", "3");

      const queryString = params.toString();
      return `https://www.youtube.com/embed/${videoId}${
        queryString ? `?${queryString}` : ""
      }`;
    } catch {
      setHasError(true);
      return url;
    }
  };

  // =========================
  // 🔥 INSTAGRAM FIRST
  // =========================
  if (platform === "instagram") {
    return <InstagramEmbed url={url} />;
  }

  const embedUrl = getEmbedUrl(url);

  // =========================
  // ❌ ERROR UI
  // =========================
  if (hasError) {
    return (
      <div className="w-full aspect-video bg-gray-100 rounded-xl flex flex-col items-center justify-center gap-3 p-4">
        <p className="text-gray-500 text-sm text-center">
          No se pudo cargar el video
        </p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-[#34A12C] hover:underline"
        >
          Ver video →
        </a>
      </div>
    );
  }

  // =========================
  // ▶️ YOUTUBE RENDER
  // =========================
  return (
    <div className="relative w-full aspect-video group">
      {isLoading && (
        <div className="absolute inset-0 bg-gray-100 rounded-xl animate-pulse flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
            <svg
              className="w-6 h-6 text-gray-400"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M10 15l5-3-5-3v6zm1-13C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
            </svg>
          </div>
        </div>
      )}

      <iframe
        className={`w-full h-full rounded-xl shadow-md transition-opacity duration-300 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
        src={embedUrl}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        onLoad={() => setIsLoading(false)}
        onError={() => setHasError(true)}
      />

      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300 rounded-xl pointer-events-none"></div>
    </div>
  );
};

export default VideoEmbed;
