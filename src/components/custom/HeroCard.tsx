import React from "react";
import { ChatBubbleBottomCenterIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

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
  hoverBgClass?: string;
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
  hoverBgClass = "hover:bg-blue-50",
  linkHref = "#",
}) => {
  return (
    <div className={`group relative bg-white rounded-2xl p-6 border ${borderColorClass} shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col h-full overflow-hidden`}>
      
      {/* Accent Border */}
      {/* <div className={`absolute bottom-0 left-0 w-full h-1  ransition-all duration-300 group-hover:h-2`} /> */}

      {/* Icon */}
      <div
        className={`w-12 h-12 flex items-center justify-center rounded-lg ${iconBgClass} transition-transform duration-300 ease-in-out group-hover:scale-105`}
      >
        <Icon className={`h-6 w-6 ${iconColorClass}`} />
      </div>

      {/* Content */}
      <div className="mt-6 flex flex-col flex-1">
        <h3 className="text-lg font-semibold text-gray-800 leading-tight">
          {title}
        </h3>

        <p className="mt-2 text-gray-600 text-sm leading-relaxed flex-1">
          {description}
        </p>

        {/* Link (Always stays at bottom) */}
        <div className={`mt-6 -mx-6 -mb-5.5 border-t ${borderColorClass}`}>
          <div
            className={`px-6 py-2 flex items-center justify-between transition ${hoverBgClass}`}
          >
            {onLinkClick ? (
              <button
                type="button"
                onClick={onLinkClick}
                className={`flex items-center justify-between w-full cursor-pointer font-medium ${iconColorClass}`}
              >
                <span>{linkText}</span>
                <ArrowRightIcon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            ) : (
              <a
                href={linkHref}
                className={`flex items-center justify-between w-full cursor-pointer font-medium ${iconColorClass}`}
              >
                <span>{linkText}</span>
                <ArrowRightIcon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;