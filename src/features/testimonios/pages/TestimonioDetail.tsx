import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import BackgroundImage from "../components/BackgroundImage";
import BackButton from "../components/ui/BackButton";
import ShareButtons from "../components/ui/ShareButtons";
import StarRating from "../components/ui/StarRating";
import TestimonioVideo from "../components/cards/TestimonioVideo";
import TestimonioTextCard from "../components/cards/TestimonioTextCard";
import TestimonioCTA from "../components/sections/TestimonioCTA";
import TestimonioLoading from "../components/states/TestimonioLoading";
import TestimonioError from "../components/states/TestimonioError";

interface Testimonio {
  imagen?: string;
  nombre: string;
  rol: string;
  contenido: string;
  youtube_url?: string;
  calificacion?: number;
  fecha?: string;
}

const TestimonioDetail = () => {
  const { id } = useParams();
  const [testimonio, setTestimonio] = useState<Testimonio | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`/api/testimonios/${id}/`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setTestimonio(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching testimonio:", err);
        setError("No se pudo cargar el testimonio");
        setLoading(false);
      });
  }, [id]);

  if (loading) return <TestimonioLoading />;
  if (error || !testimonio) return <TestimonioError error={error || undefined} />;

  const contentJSX = (
    <div className="min-h-screen py-12 md:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <BackButton href="/testimonios" />

        {/* Barra de acciones - Compartir */}
        <div className="bg-white rounded-xl shadow-md p-4 mb-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <ShareButtons title={`Testimonio: ${testimonio.nombre}`} />
            {testimonio.calificacion && <StarRating rating={testimonio.calificacion} size="sm" />}
          </div>
        </div>

        {/* Video - Primero */}
        {testimonio.youtube_url && (
          <TestimonioVideo youtubeUrl={testimonio.youtube_url} autoPlay={true} />
        )}

        {/* Texto explicativo - Segundo */}
        <TestimonioTextCard
          nombre={testimonio.nombre}
          rol={testimonio.rol}
          contenido={testimonio.contenido}
          fecha={testimonio.fecha}
          calificacion={testimonio.calificacion}
        />

        {/* CTA final */}
        <TestimonioCTA />
      </div>
    </div>
  );

  if (testimonio.imagen) {
    return (
      <BackgroundImage imageUrl={testimonio.imagen}>
        {contentJSX}
      </BackgroundImage>
    );
  }

  return contentJSX;
};

export default TestimonioDetail;
