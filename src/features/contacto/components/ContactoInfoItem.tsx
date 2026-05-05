import type { ReactNode } from "react";

interface ContactoInfoItemProps {
  icon: ReactNode;
  title: string;
  value: string;
  link?: string;
}

const ContactoInfoItem = ({ icon, title, value, link }: ContactoInfoItemProps) => {
  return (
    <div className="flex items-start gap-4 group">
      <div className="shrink-0 w-12 h-12 rounded-xl bg-[#34A12C]/10 flex items-center justify-center group-hover:bg-[#34A12C] transition-colors duration-300">
        <div className="w-6 h-6 text-[#34A12C] group-hover:text-white transition-colors">
          {icon}
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        {link ? (
          <a href={link} className="text-gray-600 hover:text-[#34A12C] transition-colors">
            {value}
          </a>
        ) : (
          <p className="text-gray-600">{value}</p>
        )}
      </div>
    </div>
  );
};

export default ContactoInfoItem;
