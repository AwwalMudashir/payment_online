import React from "react";
import { SVGProps } from "react";

interface ContactCardProps {
  icon: React.ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  info: string;
}

const ContactCard: React.FC<ContactCardProps> = ({
  icon: Icon,
  title,
  info,
}) => {
  return (
    <div className="group bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-start gap-4 h-full">
      
      {/* Icon Container */}
      <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-indigo-50 transition-all duration-300 group-hover:scale-110">
        <Icon className="h-6 w-6 text-indigo-600" />
      </div>

      {/* Content */}
      <div className="flex flex-col">
        <h3 className="text-lg font-semibold text-gray-800 leading-tight">
          {title}
        </h3>

        <p className="mt-1 text-sm text-gray-600 break-words leading-relaxed">
          {info}
        </p>
      </div>
    </div>
  );
};

export default ContactCard;