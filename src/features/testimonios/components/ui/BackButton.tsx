interface BackButtonProps {
  href: string;
  label?: string;
}

const BackButton = ({ href, label = "Volver a testimonios" }: BackButtonProps) => {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-2 text-sm font-semibold mb-6 transition-all hover:gap-3"
      style={{ color: "#34A12C" }}
    >
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
      </svg>
      {label}
    </a>
  );
};

export default BackButton;
