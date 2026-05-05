import type { ServiceBlockProps } from '../types/types';

const ServiceIcon = ({ color }: { color: string }) => (
  <svg className={`w-5 h-5 sm:w-6 sm:h-6 ${color}`} fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
  </svg>
);

const ImageWithBadge = ({ image, badgeText, badgeColorClass }: { image: string; badgeText: string; badgeColorClass: string }) => (
  <div className="relative order-1">
    <img
      src={image}
      alt={badgeText}
      className="rounded-xl sm:rounded-2xl shadow-xl w-full h-62.5 sm:h-75 md:h-87.5 lg:h-100 object-cover transform hover:scale-[1.02] transition-transform duration-300"
    />
    <div className={`absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 ${badgeColorClass} text-white px-3 sm:px-4 md:px-6 py-1 sm:py-2 rounded-full font-bold text-sm sm:text-base shadow-lg`}>
      {badgeText}
    </div>
  </div>
);

const ServiceBlock = ({
  image,
  title,
  description,
  items,
  badgeText,
  badgeColor = "#34A12C",
  imagePosition = "right",
  delay = 0
}: ServiceBlockProps) => {
  const badgeColorClass = badgeColor === "#34A12C" ? "bg-[#34A12C]" : "bg-[#012AAA]";
  const iconBgClass = badgeColor === "#34A12C" ? "bg-[#34A12C]/10" : "bg-[#012AAA]/10";
  const iconColorClass = badgeColor === "#34A12C" ? "text-[#34A12C]" : "text-[#012AAA]";
  const bgGradientClass = badgeColor === "#34A12C" 
    ? "bg-linear-to-r from-[#34A12C]/5 to-white" 
    : "bg-linear-to-l from-[#012AAA]/5 to-white";

  return (
    <div className={`animate-on-scroll opacity-0 translate-y-4 transition-all duration-500 ease-out delay-${delay}`}>
      <div className={`grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center mb-12 sm:mb-16 md:mb-20 ${bgGradientClass} p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl`}>
        {imagePosition === "left" && (
          <ImageWithBadge image={image} badgeText={badgeText} badgeColorClass={badgeColorClass} />
        )}
        
        <div className={imagePosition === "right" ? "order-2" : "order-2 md:order-1"}>
          <div className="flex items-center mb-3 sm:mb-4">
            <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg ${iconBgClass} flex items-center justify-center mr-3 sm:mr-4`}>
              <ServiceIcon color={iconColorClass} />
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900">{title}</h3>
          </div>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6">
            {description}
          </p>
          <ul className="space-y-2 sm:space-y-3">
            {items.map((item, idx) => (
              <li key={idx} className="flex items-start sm:items-center">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#34A12C] mr-2 sm:mr-3 mt-1 sm:mt-0 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                <span className="text-gray-700 text-sm sm:text-base">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {imagePosition === "right" && (
          <ImageWithBadge image={image} badgeText={badgeText} badgeColorClass={badgeColorClass} />
        )}
      </div>
    </div>
  );
};

export default ServiceBlock;
