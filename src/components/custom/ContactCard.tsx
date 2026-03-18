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
    <div className="group bg-white border border-gray-100 rounded-2xl p-4 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 flex items-start gap-3 h-full">
      
      {/* Icon Container */}
      <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-lg bg-indigo-50 transition-all duration-200 group-hover:scale-105">
        <Icon className="h-5 w-5 text-indigo-600" />
      </div>

      {/* Content */}
      <div className="flex flex-col">
        <h3 className="text-base font-semibold text-gray-800 leading-tight">
          {title}
        </h3>

        <p className="mt-1 text-sm text-gray-600 break-words leading-snug">
          {info}
        </p>
      </div>
    </div>
  );
};

export default ContactCard;