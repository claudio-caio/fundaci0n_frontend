import fondoFooter from "../../assets/footer.jpeg";
import { FooterContent } from "./FooterContent.tsx";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className="relative border-t bg-fixed bg-cover bg-center bg-no-repeat"
      style={{ 
        borderTopColor: "#34A12C", 
        borderTopWidth: "4px",
        backgroundImage: `url(${fondoFooter})`,
      }}
    >
      {/* Capa traslúcida MEJORADA - menos opaca para que se vea más la imagen */}
      <div 
        className="absolute inset-0"
        style={{ 
          backgroundColor: "rgba(255, 255, 255, 0.10)",
          backdropFilter: "blur(1px)",
        }}
      ></div>
      
      {/* Capa con gradiente MEJORADO - mantiene el contraste */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/20 to-white/40"
      ></div>

      {/* Contenido del footer - relativo para estar por encima de la capa */}
      <div className="relative z-10">
        <FooterContent currentYear={currentYear} />
      </div>
    </footer>
  );
}

export default Footer;
