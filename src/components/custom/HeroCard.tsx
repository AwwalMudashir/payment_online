import React from "react";
import { ChatBubbleBottomCenterIcon } from "@heroicons/react/24/outline";

export interface HeroCardProps {
  title: string;
  description: string;
  linkText?: string;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  iconColorClass?: string;
  iconBgClass?: string;
  borderColorClass?: string;
  onLinkClick?: () => void;
  linkHref?: string;
}

const HeroCard: React.FC<HeroCardProps> = ({
  title,
  description,
  linkText = "Click Here",
  icon: Icon = ChatBubbleBottomCenterIcon,
  iconColorClass = "text-indigo-600",
  iconBgClass = "bg-indigo-50",
  borderColorClass = "border-blue-500",
  onLinkClick,
  linkHref = "#",
}) => {
  return (
    <div className={`group relative bg-white rounded-2xl p-8 border ${borderColorClass} shadow-sm hover:shadow-xl transition-all duration-[0.85s] hover:-translate-y-2 flex flex-col h-full overflow-hidden`}>
      
      {/* Accent Border */}
      {/* <div className={`absolute bottom-0 left-0 w-full h-1  ransition-all duration-300 group-hover:h-2`} /> */}

      {/* Icon */}
      <div
        className={`w-14 h-14 flex items-center justify-center rounded-xl ${iconBgClass} transition-transform duration-500 ease-in-out group-hover:scale-110`}
      >
        <Icon className={`h-7 w-7 ${iconColorClass}`} />
      </div>

      {/* Content */}
      <div className="mt-6 flex flex-col flex-1">
        <h3 className="text-xl font-semibold text-gray-800 leading-tight">
          {title}
        </h3>

        <p className="mt-3 text-gray-600 text-sm leading-relaxed flex-1">
          {description}
        </p>

        {/* Link (Always stays at bottom) */}
        <div className="mt-6">
          {onLinkClick ? (
            <button
              type="button"
              onClick={onLinkClick}
              className={`inline-flex items-center cursor-pointer font-medium ${iconColorClass} transition-all duration-300 group-hover:translate-x-1`}
            >
              {linkText}
              {/* <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                →
              </span> */}
            </button>
          ) : (
            <a
              href={linkHref}
              className={`inline-flex cursor-pointer items-center font-medium ${iconColorClass} transition-all duration-300 group-hover:translate-x-1`}
            >
              {linkText}
              {/* <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                →
              </span> */}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroCard;