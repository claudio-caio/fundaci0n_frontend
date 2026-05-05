import Hero from "../../../components/Hero/Hero";
import ContactoHero from "../components/ContactoHero";
import ContactoInfoCard from "../components/ContactoInfoCard";
import ContactoFormulario from "../components/ContactoFormulario";
import ContactoMapa from "../components/ContactoMapa";
import { useContactoForm } from "../hooks/useContactoForm";
import CustomScrollbar from "../../../components/CustomScrollbar";

const Contactanos = () => {
  const { form, loading, status, errorMessage, handleChange, handleSubmit } = useContactoForm();

  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <ContactoHero />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactoInfoCard />
          <ContactoFormulario
            form={form}
            loading={loading}
            status={status}
            errorMessage={errorMessage}
            onChange={handleChange}
            onSubmit={handleSubmit}
          />
        </div>
      </div>

      <ContactoMapa />
      <CustomScrollbar/>
    </div>
  );
};

export default Contactanos;
