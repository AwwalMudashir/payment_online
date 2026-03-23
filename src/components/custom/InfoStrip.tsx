import React from "react";

interface InfoItem {
  label: string;
  value: string;
}

interface InfoStripProps {
  items: InfoItem[];
}

const InfoStrip: React.FC<InfoStripProps> = ({ items }) => {
  return (
    <div className="w-full">
      <div className="max-w-6xl  mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-2xl px-4 py-2 border border-gray-500"
          >
            <p className="text-sm text-left mx-auto font-semibold text-gray-500  uppercase">
              {item.label}
            </p>
            <p className="mt-2 text-md text-left mx-auto md:text-md font-bold text-gray-900">
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoStrip;