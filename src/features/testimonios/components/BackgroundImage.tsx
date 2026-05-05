interface BackgroundImageProps {
  imageUrl: string;
  children?: React.ReactNode;
}

const BackgroundImage = ({ imageUrl, children }: BackgroundImageProps) => {
  return (
    <div className="relative min-h-screen bg-white">
      {/* Imagen de fondo con overlay */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div 
        className="fixed inset-0"
        style={{ 
          backgroundColor: "rgba(255, 255, 255, 0.50)",
          backdropFilter: "blur(2px)",
        }}
      />
      <div className="fixed inset-0 bg-linear-to-b from-white/50 via-transparent to-white/50" />
      
      {/* Contenido */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default BackgroundImage;
